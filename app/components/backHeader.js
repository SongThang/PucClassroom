import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import ICon from "react-native-vector-icons/Ionicons";
export default  BackHeader=({onBack})=> {
    return (
      <SafeAreaView style={styles.ImageBackground}>
        <View style={styles.Header}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <TouchableOpacity
            onPress={onBack}>
              <ICon style={styles.icon} name="ios-arrow-back" />
            </TouchableOpacity>
            <TouchableOpacity>
              <ICon style={styles.icon} name="ios-more" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  Header: {
    marginLeft: 22,
    marginRight: 22,
    paddingBottom: 12,
  },
  ImageBackground:{
    backgroundColor: "#ffff",
    borderBottomColor: "#d5d5d5",
    borderBottomWidth: 0.5
  },
  icon: {
    fontSize: 32,
    color: "#2d2d2d"
  },
});
