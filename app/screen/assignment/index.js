//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import moment from "moment";
import ICon from 'react-native-vector-icons/Ionicons'
import { ScrollView } from "react-native-gesture-handler";

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
        <View
          style={styles.ImageBackground}
          // source={require("../../img/images.jpeg")}
        >
        <SafeAreaView style={styles.Header}>
        <View style={{flexDirection:"row", alignItems: "center",justifyContent: "space-between"}}>
        <TouchableOpacity>
        <ICon style={styles.icon} name="ios-arrow-back"/>
        </TouchableOpacity>
        <TouchableOpacity>
        <ICon style={styles.icon} name="ios-more"/>
        </TouchableOpacity>
        </View>
          <View style={{paddingTop:12,}}>
            <View >
              <View>
              <View style={[styles.row, styles.m10]}>
                <Text style={{color:"#2b2b2b", fontSize:20,fontWeight:'600', flex:1}}>Introduction to Computer </Text>
                <Text style={{color:"#2b2b2b",fontSize:11, fontWeight:'200'}}>COM 204</Text>
                </View>
                <View style={styles.row}>
                <ICon style={styles.si} name="ios-beer"/>
                <Text style={{color:"#2b2b2b", fontSize:14, fontWeight:'200'}}>From: 08:00 am to 09:30</Text>
                </View>
                <View style={styles.row}>
                <ICon style={styles.si} name="ios-calendar"/>
                <Text style={{color:"#2b2b2b", fontSize:14, fontWeight:'200'}}>Tue / Th</Text>
                </View>
              </View>
               <View style={styles.row}>
                <ICon style={styles.si} name="ios-school"/>
                <Text style={{color:"#2b2b2b", fontSize:14, fontWeight:'200'}}>Major: Computer Science</Text>
                </View>

              
              
            </View>
          </View>
          </SafeAreaView>
        </View>
        <ScrollView>
                <View style={{margin: 22}}>
                <Text style={styles.title}>Student List</Text>
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
  ImageBackground: {
    height: 250,
    backgroundColor: "#f8f9fa"
  },
  Header:{
    margin:22,
  },
  icon:{
    fontSize:32,
    color:'#2d2d2d'
  },
  si:{
    fontSize:15,
    color:'#2b2b2b',
    marginRight: 15,
  },
  title:{
    fontWeight:'600',
    fontSize:22,
   
  },
   row:{
     flexDirection: 'row',
     alignItems: 'center',
     marginBottom: 5,
   },
   m10:{
    marginBottom: 10,
   }
});


//make this component available to the app
export default AssignmentScreen;
