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
import ICon from "react-native-vector-icons/Ionicons";
import HeaderDetail from "../../components/headerDetail";
import RnStudentList from "../../components/StudentList";
import BackHeader from "../../components/backHeader";
import LinearGradient from "react-native-linear-gradient";
import { MaterialIndicator } from "react-native-indicators";
import { inject, observer } from "mobx-react";
import { getDaysSchedule } from "../../service/format";
import { FlatList } from "react-native-gesture-handler";
import Modal from "react-native-modal";

// create a component
@inject("schedule")
@observer
class AssignmentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTime: new Date(),
      time: null,
      color: "#000",
      isModalVisible: false,
      
    };
  }

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  _renderModal=()=>{
    return(
      <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
            <TouchableOpacity onPress={this._toggleModal}>
              <Text>Hide me!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
    )
  }
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
      />
    );
  };
  _renderStudentItems = item => {
    return (
      <RnStudentList
      onSelected={()=>this._toggleModal()}
      Student={item.student.full_name}
      studentID={item.student.puc_id}
      studentSex={item.student.gender.text}
      />
    );
  };
  render() {
    const { studentList } = this.props.schedule;
    return (
      <View style={styles.container}>
        <BackHeader onBack={() => this._onBack()} />
        <ScrollView>
          {this._renderHeaderItems()}
          <View>
            <View
              style={{
                marginRight: 22,
                marginTop: 12,
                marginLeft: 22,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <ICon
                  style={{ paddingRight: 12, fontSize: 22, color: "blue" }}
                  name="ios-clipboard"
                />
                <Text style={styles.title}>Student List</Text>
              </View>
            </View>
            {
              <FlatList
                data={studentList}
                
                renderItem={({ item, index }) => this._renderStudentItems(item)}
              />
            }
          </View>
        </ScrollView>
        {this._renderModal}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0"
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
  }
});

//make this component available to the app
export default AssignmentScreen;
