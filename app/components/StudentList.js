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
  onSelected
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
          borderRadius: 12,
          borderBottomColor: '#CC61C8',
          borderBottomWidth: 1,
          justifyContent: "center"
        }}
      >
        <TouchableOpacity onPress={onSelected}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
            <View style={{ marginLeft: 12, flexDirection: "row", justifyContent: "center" }}>
              <ICon style={styles.Icon} name="ios-contacts" />
              <Text style={{ fontSize: 16, paddingLeft: 12 }}>{Student}</Text>
            </View>
            <View style={{ marginLeft: 12, flexDirection: "row", justifyContent: "center" }}>
              <Text style={{ fontSize: 16, fontWeight: '300', paddingRight: 12 }}>{studentID}</Text>
              <Text style={{ fontSize: 16, fontWeight: '300' }}>{studentSex}</Text>
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
  status: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    height: 30,
    borderRadius: 25
  },
});
