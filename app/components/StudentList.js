import React, { Component } from "react";
import Modal from 'react-native-modal'
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import ICon from "react-native-vector-icons/Ionicons";

export default (StudentList = ({
  studentSex,
  Student,
  studentID,
  onSelected,
  bg,
  status,
  iconName

}) => {

if(status){
  return(
    <View>
<View style={{ marginHorizontal: 6 }} >
      <View style={{
        // borderLeftColor: "#CC61C8",
        borderLeftColor: { bg },
        borderLeftWidth: 5,
        marginTop: 6,
        padding: 12,
        borderRadius: 2,
        justifyContent: "center",
        backgroundColor: "#EDEFEE"

      }}
        borderLeftColor={bg}

      >
        <TouchableOpacity onPress={onSelected}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
            <View style={{ flexDirection: "column", justifyContent: "center" }}>

              <Text style={{ fontSize: 16, }}>{Student} </Text>
              <Text style={{ fontSize: 11, fontWeight: '300' }}>{studentID}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <View style={styles.status} backgroundColor="#fff">
                <Text style={{ color: '#2b2b2b', fontWeight: '400', fontSize: 11 }}>{status}</Text>
              </View>
         

            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>

    </View>
  )
}

  return (
    <View style={{ marginHorizontal: 6 }} >
      <View style={{
        // borderLeftColor: "#CC61C8",
        borderLeftColor: { bg },
        borderLeftWidth: 5,
        marginTop: 6,
        padding: 12,
        borderRadius: 2,
        justifyContent: "center",
        backgroundColor: "#EDEFEE"

      }}
        borderLeftColor={bg}

      >
        <TouchableOpacity onPress={onSelected}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
            <View style={{ flexDirection: "column", justifyContent: "center" }}>

              <Text style={{ fontSize: 16, }}>{Student} </Text>
              <Text style={{ fontSize: 11, fontWeight: '300' }}>{studentID}</Text>
            </View>
            <View style={{ marginLeft: 12, flexDirection: "row", justifyContent: "center" }}>
            
              <ICon style={styles.icon} name={iconName} />

            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center"
  },
  colorchange: {
    color: "blue"
  },
  Icon: {
    fontSize: 22,
  },
  // status: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   paddingLeft: 15,
  //   paddingRight: 15,
  //   height: 30,

  // },
  status: {
    justifyContent: 'center',
    alignItems: 'center', 
    paddingLeft: 8,
    paddingRight: 8, 
    borderRadius: 25,
    height: 20
},
});
