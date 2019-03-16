import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import ICon from "react-native-vector-icons/Ionicons";
export default (headerDetail = ({
  subject,
  courseCode,
  fromH,
  toH,
  date,
  major,
  floor,
  roomName,
  building
}) => {
  return (
    <View>
      <View
        style={styles.ImageBackground}
        // source={require("../../img/images.jpeg")}
      >
        <SafeAreaView style={styles.Header}>
          <View>
            <View>
              <View>
                <View style={[styles.row, styles.m10]}>
                  <Text
                    style={{
                      color: "#2b2b2b",
                      fontSize: 22,
                      fontWeight: "600",
                      flex: 1
                    }}
                  >
                    {subject}
                  </Text>
                  <Text
                    style={{
                      color: "#2b2b2b",
                      fontSize: 11,
                      fontWeight: "200"
                    }}
                  >
                    {courseCode}
                  </Text>
                </View>
                <View style={styles.row}>
                  <ICon style={styles.si} name="ios-alarm" />
                  <Text
                    style={styles.text}
                  >
                    {fromH} to {toH}
                  </Text>
                </View>
                <View style={styles.row}>
                  <ICon style={styles.si} name="ios-calendar" />
                  <Text
                    style={styles.text}
                  >
                    {date}
                  </Text>
                </View>
              </View>
              <View style={styles.row}>
                <ICon style={styles.si} name="ios-school" />
                <Text
                  style={styles.text}
                >
                  {major}
                </Text>
              </View>
            </View>
          </View>
            <View style={styles.row}>
            <ICon style={styles.si} name="ios-business"/>
              <Text style={styles.text}>{roomName}</Text>
            </View>
            <View style={styles.row}>
            <ICon style={styles.si} name="ios-apps"/>
              <Text style={styles.text}>{floor}</Text>
            </View>
            <View style={styles.row}>
            <ICon style={styles.si} name="ios-home"/>
              <Text style={styles.text}>{building}</Text>
            </View>
        </SafeAreaView>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  ImageBackground: {
    backgroundColor: "#fff",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingVertical:20,
  },
  Header: {
    marginRight: 22,
    marginLeft: 22
  },
  icon: {
    fontSize: 32,
    color: "#2d2d2d"
  },
  si: {
    fontSize: 15,
    color: "#2b2b2b",
    marginRight: 15
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5
  },
  m10: {
    marginBottom: 10
  },

  com: {
    flexDirection:'row',
  },
  text: {
    color: "#2b2b2b",
    fontSize: 14,
    fontWeight: "200"
  }
});
