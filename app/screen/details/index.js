//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet,ScrollView,SafeAreaView,TouchableOpacity } from "react-native";
import moment from "moment";
import ICon from "react-native-vector-icons/Ionicons";
import HeaderDetail from "../../components/headerDetail";
import StudentList from "../../components/StudentList";
import BackHeader from "../../components/backHeader";
import LinearGradient from 'react-native-linear-gradient';
import {
  MaterialIndicator,
} from 'react-native-indicators';
import { inject, observer } from "mobx-react";
import { getDaysSchedule } from "../../service/format";
// create a component
@inject("schedule")
@observer
class AssignmentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTime: new Date(),
      time: null,
      color: "#000"
    };
  }

 _onBack=()=>{
   this.props.navigation.goBack();
 }
 _renderHeaderItems = () => {
    const{selectedClass}= this.props.schedule
    console.log('selectedClass', selectedClass)
    const { room, session, schedule_subject,major } = selectedClass;
    const { RoomName,building, floor} = room;
    const { fromHours, toHours ,days} = session;
    const { code, name } = schedule_subject.subject;
    const date =getDaysSchedule(days)
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
  render() {
    return (
      <View style={styles.container}>
      <BackHeader onBack={()=>this._onBack()}/>
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
                  style={{ paddingRight: 12, fontSize: 22,color:"blue" }}
                  name="ios-clipboard"
                />
                <Text style={styles.title}>Student List</Text>
              </View>
            </View>
           
            <StudentList Student="Sitha"/>
            <StudentList Student="Hy dely Ethan" />
            <StudentList Student="Hok Pengleng"/>
            <StudentList Student="Phon Vannaroth"/>
            <StudentList Student="Sun Tekleang"/>
            <StudentList Student="Sou Lyly"/>
            <StudentList Student="JK Khemera"/>
        </View>
        <View style={styles.SummitButton}>
        <TouchableOpacity onPress={this._onSummit}>
                        <LinearGradient colors={['#0070c9', '#FFB51C', '#667db6',]} style={{ alignItems: 'center', marginTop: 22, borderRadius: 25, overflow: "hidden", height: 50, justifyContent: 'center', width: 300, }}>
                            <LinearGradient colors={['#fff', '#fff', '#fff',]} style={{ alignItems: 'center', borderRadius: 29, overflow: "hidden", height: 48, justifyContent: 'center', width: 299, }}>
                                        <View>
                                            <Text style={styles.text} >Summit</Text>
                                        </View>
                                
                            </LinearGradient>
                        </LinearGradient>
                    </TouchableOpacity>
        </View>
      </ScrollView>
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
  SummitButton:{
  alignItems:'center',
  },
  title: {
    fontWeight: "600",
    fontSize: 20
  },
  text:{
    fontSize:16,
    color:'blue'
  }
});

//make this component available to the app
export default AssignmentScreen;
