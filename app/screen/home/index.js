//import liraries
import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { View, Text, SafeAreaView, ScrollView, FlatList } from "react-native";
import style from "../../style/index";
import Header from "../../components/header";
import Category from "../../components/category";
import HeaderTxt from "../../components/txtHeader";
import Schedule from "../../components/schedule";
import Classroom from "../../components/classroom";
import PHeader from "../../components/pheader";
import { MaterialIndicator } from "react-native-indicators";

@inject("schedule", "environment", "auth")
@observer
// create a component
class HomeScreen extends Component {
  componentDidMount() {
    const { uid } = this.props.auth;
    this.props.environment.fetchEnvironmentToArray(req => {
      const { term } = this.props.environment;
      if (term) {
        this.props.schedule.fetchData(term.key, uid);
      }
    });
  }
  _onProfile = () => {
    this.props.navigation.navigate("Profile");
  };
  _onDetails = (classKey, item) => {
    const { term } = this.props.environment;
    this.props.schedule.fetchSelectedClass(item);
    this.props.schedule.fetchStudentList(term.key, classKey);
    this.props.navigation.navigate("Details");
  };
  _onSingOut = () => {
    this.props.auth.logOut();
  };
  _renderItems = item => {
    const { room, session, schedule_subject, key } = item;
    const { RoomName } = room;
    const { fromHours, toHours } = session;
    const { code, name } = schedule_subject.subject;
    return (
      <Schedule
        onClick={() => this._onDetails(key, item)}
        roomname={RoomName}
        fromTime={fromHours}
        toTime={toHours}
        subject={name}
      />
    );
  };
  _renderItemsCode = item => {
    const { schedule_subject, key } = item;
    const { code } = schedule_subject.subject;
    return <Classroom courseCode={code} />;
  };
  render() {
    const { data, loading, empty } = this.props.schedule;
    return (
      <SafeAreaView style={[style.container, style.backgroundColor]}>
        <Header onClick={() => this._onProfile()} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <Category />
          <HeaderTxt mainTxt="Classroom" />

          <ScrollView showsHorizontalScrollIndicator={false}>
            {loading ? (
              <MaterialIndicator size={18} color="#0070c9" />
            ) : empty ? (
              <View>
                <Text>No Schedule</Text>
              </View>
            ) : (
              <FlatList
                horizontal={true} 
                data={data}
                renderItem={({ item, index }) => this._renderItemsCode(item)}
              />
            )}
          </ScrollView>
          <HeaderTxt mainTxt="Daily Schedule" />
          {loading ? (
            <MaterialIndicator size={18} color="#0070c9" />
          ) : empty ? (
            <View>
              <Text>No Schedule</Text>
            </View>
          ) : (
            <FlatList
              data={data}
              renderItem={({ item, index }) => this._renderItems(item)}
            />
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
