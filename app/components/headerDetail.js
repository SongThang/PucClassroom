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
  building,
  onBack,
  status
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
              <TouchableOpacity
            onPress={onBack} style={{ flex: 1}}>
              <ICon style={styles.icon} name="ios-arrow-back" />
            </TouchableOpacity>
           
            <TouchableOpacity>
          
              <ICon style={styles.icon} name="ios-more" />
            </TouchableOpacity>
            </View>

                <View style={[styles.row, styles.m10]}>
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 18,
                      fontWeight: "600",
                      flex: 1
                    }}
                  >
                    {subject} 
                  </Text>
                  <Text
                    style={{
                      color: "#fff",
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
                    {fromH} - {toH}
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
          {/* <View style={styles.row}>
            <ICon style={styles.si} name="ios-business" />
            <Text style={styles.text}>{roomName}</Text>
          </View>
          <View style={styles.row}>
            <ICon style={styles.si} name="ios-apps" />
            <Text style={styles.text}>{floor}</Text>
          </View>
          <View style={styles.row}>
            <ICon style={styles.si} name="ios-home" />
            <Text style={styles.text}>{building}</Text>
          </View> */}
        </SafeAreaView>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  ImageBackground: {
    backgroundColor: "#F27676",
    paddingVertical: 12,
  },
  Header: {
    marginRight: 16,
    marginLeft: 16
  },
  icon: {
    fontSize: 28,
    color: "#fff"
  },
  si: {
    fontSize: 14,
    color: "#fff",
    marginRight: 12,
   
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    // marginBottom: 5
  },
  m10: {
    marginBottom: 10
  },

  com: {
    flexDirection: 'row',
  },
  text: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "200"
  }
});
