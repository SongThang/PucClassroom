import React, { Component } from 'react'
import { Text, StyleSheet, View,SafeAreaView,TouchableOpacity, } from 'react-native'
import ICon from 'react-native-vector-icons/Ionicons'
export default headerDetail =({subject,courseCode, fromH, toH, date, major,floor, roomName,building })=> {

    return (
      <View>
        <View
          style={styles.ImageBackground}
          // source={require("../../img/images.jpeg")}
        >
          <SafeAreaView style={styles.Header}>
            <View style={{ paddingTop: 12 }}>
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
                      style={{
                        color: "#2b2b2b",
                        fontSize: 14,
                        fontWeight: "200"
                      }}
                    >
                      {fromH} to {toH}
                    </Text>
                  </View>
                  <View style={styles.row}>
                    <ICon style={styles.si} name="ios-calendar" />
                    <Text
                      style={{
                        color: "#2b2b2b",
                        fontSize: 14,
                        fontWeight: "200"
                      }}
                    >
                     {date}
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <ICon style={styles.si} name="ios-school" />
                  <Text
                    style={{
                      color: "#2b2b2b",
                      fontSize: 14,
                      fontWeight: "200"
                    }}
                  >
                    {major}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.background}>
              <View style={styles.com}>
                <Text>{roomName}</Text>
              </View>
              <View style={styles.com}>
                <Text>{floor}</Text>
              </View>
              <View style={styles.com}>
                <Text>{building}</Text>
              </View>
            </View>
          </SafeAreaView>
        </View>
        
      </View>
    )
  }


const styles = StyleSheet.create({
    ImageBackground: {
        height: 180,
        backgroundColor: "#fff",
        borderBottomLeftRadius:32,
        borderBottomRightRadius: 32
      },
      Header: {
        marginTop: 8,
        marginRight: 22,
        marginLeft: 22,
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
      background: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 12
      },
      com: {
        alignItems: "center",
        justifyContent: "center",

      },
})
