//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import moment from "moment";
import ICon from 'react-native-vector-icons/MaterialIcons'

// create a component
class AssignmentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTime: new Date(),
      time: null
    };
  }

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
        <ImageBackground
          style={styles.ImageBackground}
          source={require("../../img/images.jpeg")}
        >
        <SafeAreaView style={styles.Header}>
        <View style={{flexDirection:"row", alignItems: "center",justifyContent: "space-between"}}>
        <TouchableOpacity>
        <ICon style={styles.icon} name="arrow-back"/>
        </TouchableOpacity>
        <TouchableOpacity>
        <ICon style={styles.icon} name="more-vert"/>
        </TouchableOpacity>
        </View>
          <View style={{paddingTop:25}}>
            <View style={{ justifyContent: "flex-end", }}>
              <View style={{marginBottom:12}}>
                <Text style={{color:"#000", fontSize:28,fontWeight:'500'}}>Major</Text>
                <Text style={{color:"#fff",fontSize:22, fontWeight:'200'}}>Class Name</Text>
                <Text style={{color:"#fff", fontSize:22, fontWeight:'200'}}>Floor/ building/Campus</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: 'flex-end',
                  
                }}
              >
                <Text style={{ fontSize: 26, color: "#000" }}>Python</Text>
                <Text style={{ fontSize: 26, color: "#fff" }}>8:00-11:00/Th</Text>
              </View>
            </View>
          </View>
          </SafeAreaView>
        </ImageBackground>
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
  ImageBackground: {
    height: 250
  },
  Header:{
    margin:22,
  },
  icon:{
    fontSize:32,
    color:'#fff'
  }
});


//make this component available to the app
export default AssignmentScreen;
