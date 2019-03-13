import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import ICon from "react-native-vector-icons/Ionicons";

export default (StudentList = ({
  onPressIn,
  onPressOut,
  onSelected,
  color,
  Student,
}) => {
  return (
    <View>
      <View
        style={{
          borderLeftColor: "#CC61C8",
          borderLeftWidth: 5,
          marginLeft: 12,
          marginTop: 12,
          padding: 12,
          backgroundColor: "#f7f9fa",
          borderRadius:12,
          borderBottomColor:'#CC61C8',
          borderBottomWidth: 1

        }}
      >
        <View style={{ marginLeft: 12, flexDirection:"row",}}>
         <ICon style={styles.Icon} name="ios-contacts"/>
          <Text style={{ fontSize: 16, paddingLeft:12 }}>{Student}</Text>
          
        </View>
        <View
          style={{
            marginTop: 12,
            marginLeft: 12,
            paddingRight: 12,
            justifyContent: "space-between",
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            onPress={onSelected}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
          >
            <View style={styles.center}>
              <Text style={{ color: color }}>Present</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.center}>
              
              <Text>Late</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.center}>
           
              <Text>Absent</Text>
            </View>
          </TouchableOpacity>
        </View>
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
  Icon:{
    fontSize:22,
  }
});
