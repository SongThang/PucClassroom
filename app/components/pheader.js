//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default PHeader =({onClick,onSignOut})=> {
    return (
      <View style={styles.container}>
        <View style={styles.frame}>
          <ImageBackground source={require("../img/bg.png")} style={styles.bg}>
            <View style={styles.top}>
              <View style={styles.row}>
                <TouchableOpacity style={styles.back} onPress={onClick}>
                  <Icon name="ios-arrow-round-back" style={styles.icon} />
                </TouchableOpacity>
                <View style={styles.spacing} />
                <TouchableOpacity style={styles.back} onPress={onSignOut}>
                  <Icon name="ios-more" style={styles.icon} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.buttom}>
              <View style={[styles.row, styles.h]}>
                <View style={styles.circle}>
                  <Image style={styles.img} source={require("../img/p3.jpg")} />
                </View>

                <View style={styles.spacing} />
                <TouchableOpacity style={styles.btn}>
                  <View style={styles.btnIN}>
                    <Text>Edit profile</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.row}>
                <View style={styles.name}>
                  <Text style={styles.txt}>Professor James</Text>
                  <Text>@puc.com</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  frame: {
    height: 195,
    backgroundColor: "#fff"
  },
  bg: {
    height: 180,
    width: 370
  },
  top: {
    height: 105
  },
  buttom: {
    flex: 1,
    backgroundColor: "#fff"
  },
  row: {
    flexDirection: "row",
    paddingRight: 15,
    paddingLeft: 15
  },
  circle: {
    width: 95,
    height: 95,
    borderRadius: 47.5,
    backgroundColor: "#fff",
    top: -40,

    justifyContent: "center",
    alignItems: "center"
  },
  spacing: {
    flex: 1
  },
  img: {
    width: 88,
    height: 88,
    borderRadius: 44
  },
  btn: {
    marginTop: 12,
    backgroundColor: "#CC61C8",
    width: 100,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  btnIN: {
    backgroundColor: "#fff",

    width: 98,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    fontSize: 24,
    color: "#fff"
  },
  back: {
    marginTop: 12,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#2b2b2b",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.4
  },
  name: {
    marginTop: 35
  },
  txt: {
    fontSize: 18,
    fontWeight: "600"
  },
  h: {
    height: 20
  }
});
