//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Octicons";

// create a component
export default (Header = ({onClick}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.left}>
          <TouchableOpacity style={styles.profile} onPress={onClick}>
            <Image source={require("../img/user.jpg")} style={styles.img} />
          </TouchableOpacity>
          <Text style={styles.txt}>Prof. Uncute Real Zin</Text>
        </View>
        <View style={styles.right}>
          {/* <TouchableOpacity>
            <Icon name="bookmark" size={20} style={styles.icon} />
          </TouchableOpacity> */}
          {/* <TouchableOpacity>
            <Icon name="project" size={20} />
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
});

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 55,
    borderBottomWidth: 0.5,
    borderBottomColor: "#d5d5d5",
    justifyContent: "center",
    
  },
  row: {
    flexDirection: "row",
    marginLeft: 15,
    marginRight: 15
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  },
  right: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  profile: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2b2b2b",
    marginRight: 15
  },
  txt: {
    fontSize: 22,
    fontWeight: "600"
  },
  icon: {
    marginRight: 25
  },
  img: {
    height: 37,
    width: 37,
    borderRadius: 18.5
  }
});
