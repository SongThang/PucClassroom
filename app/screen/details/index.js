//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import moment from "moment";

import VerifyModal from '../../components/modal'
import ICon from "react-native-vector-icons/Ionicons";
import HeaderDetail from "../../components/headerDetail";
import RnStudentList from "../../components/StudentList";
import BackHeader from "../../components/backHeader";
import LinearGradient from "react-native-linear-gradient";
import { MaterialIndicator } from "react-native-indicators";
import { inject, observer } from "mobx-react";
import { getDaysSchedule, toDateKey } from "../../service/format";
import { FlatList } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import { createId } from '../../service/data.service';

// create a component
@inject("schedule", "auth")
@observer
class AssignmentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTime: new Date(),
      time: null,
      color: "#000",
      isModalVisible: false,
      student: null,
      dateKey: toDateKey(new Date()),

    };
  }
  

  _onCheckIn = (status) => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
    const { account } = this.props.auth
    const { selectedClass } = this.props.schedule;
    const { room, session, schedule_subject, secondaryRoom, term, key, secondarySession } = selectedClass;
    const checkIn = {
      student: this.state.student,
      key: createId(),
      term: term,
      schedule_subject: schedule_subject,
      session: session,
      secendarySession: secondarySession,
      classKey: key,
      room: room,
      secendaryRoom: secondaryRoom,
      checkDateKey: toDateKey(new Date()),
      instructor: account,
      checkDate: new Date(),
      status: status,
    }
    this.props.schedule.checkIn(checkIn, res => {
      if (!res) {
        alert("Update Error")
      }
    })
  }

  
  _toggleModal = (item) => {
    if (item) {
      this.setState({ student: item })
    }
    this.setState({ isModalVisible: !this.state.isModalVisible });

  }
  // _renderModal = () => {
  //   return (
  //     <Modal isVisible={this.state.isModalVisible}>
  //       <View style={{ flex: 1 }}>
  //         <Text>Hello!</Text>
  //         <TouchableOpacity onPress={() => this._toggleModal()}>
  //           <Text>Hide me!</Text>
  //         </TouchableOpacity>
  //       </View>
  //     </Modal>
  //   )
  // }
  _onBack = () => {
    this.props.navigation.goBack();
  };
  _renderHeaderItems = () => {
    const { selectedClass } = this.props.schedule;
    const { room, session, schedule_subject, major } = selectedClass;
    const { RoomName, building, floor } = room;
    const { fromHours, toHours, days } = session;
    const { code, name } = schedule_subject.subject;
    const date = getDaysSchedule(days);


    return (
      <HeaderDetail
        subject={name}
        courseCode={code}
        fromH={fromHours}
        toH={toHours}
        date={date}
        major={major.MajorName}
        floor={floor.name}
        roomName={RoomName}
        building={building.name}
        onBack={() => this._onBack()}
      />
    );
  };
  _renderStudentItems = item => {
    const checkIn = item[this.state.dateKey];
 
    if (checkIn) {
      return <RnStudentList
        onSelected={() => this._toggleModal(item)}
        Student={item.student.full_name}
        studentID={item.student.puc_id}
        studentSex={item.student.gender.text}
        bg='#F27676'
        status={item[this.state.dateKey].status.text}
       
      />
    }
    return (
      <RnStudentList
        onSelected={() => this._toggleModal(item)}
        Student={item.student.full_name}
        studentID={item.student.puc_id}     
        bg='#CC61C8'
        iconName= 'ios-more'
      />

    );
  };
  render() {
    const { studentList } = this.props.schedule;
    const { process } = this.props.schedule;
    return (

      <View style={styles.container}>

        {/* <BackHeader onBack={() => this._onBack()} /> */}
        <View >
          <Modal isVisible={this.state.isModalVisible} style={styles.bottomModal}>
            <VerifyModal onClick={this._onCheckIn} close={this._toggleModal} />
          </Modal>
        </View>
        <View >
          {this._renderHeaderItems()}
        </View>
        <View style={{ flex: 1 }}>


          <FlatList
            data={studentList}
            renderItem={({ item, index }) => this._renderStudentItems(item)}
          />


        </View>


      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  SummitButton: {
    alignItems: "center"
  },
  title: {
    fontWeight: "600",
    fontSize: 20
  },
  text: {
    fontSize: 16,
    color: "blue"
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  },
});

//make this component available to the app
export default AssignmentScreen;
