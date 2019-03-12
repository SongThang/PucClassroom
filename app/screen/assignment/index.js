//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";
import ICon from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
import HeaderDetail from "../../components/headerDetail";
import StudentList from "../../components/StudentList";

// create a component
class AssignmentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTime: new Date(),
      time: null,
      color: "#000"
    };
  }

  
  _onPressIn = () => {
    this.setState({ color: "red" });
  };

  _onPressOut = () => {
    this.setState({ color: "#000" });
  };

  componentDidMount() {
    this.time = setInterval(() => {
      this.setState({
        curTime: new Date()
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.time);
  }
  render() {
    return (
      <View style={styles.container}>
        <HeaderDetail />
        <View>
          <ScrollView>
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
                  style={{ paddingRight: 12, fontSize: 22 }}
                  name="ios-people"
                />
                <Text style={styles.title}>Student List</Text>
              </View>
            </View>
            <StudentList
              onPressIn={this._onPressIn}
              // onPressOut={this._onPressOut}
              color={this.state.color}
              onSelected={() => {}}
            />
            <StudentList />
            <StudentList />
            <StudentList />
            <StudentList />
            <StudentList />
            <StudentList />
            <StudentList />
            <StudentList />
            <StudentList />
            <StudentList />
            <StudentList />
            <StudentList />
            <StudentList />
            <StudentList />
            <StudentList />
            <StudentList />
            <StudentList />
            <StudentList />
            <StudentList />
          </ScrollView>
        </View>
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
  btn: {
    backgroundColor: "blue",
    borderColor: "red",
    borderWidth: 1,
    width: 100,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12
  },
  title: {
    fontWeight: "600",
    fontSize: 20
  }
});

//make this component available to the app
export default AssignmentScreen;
