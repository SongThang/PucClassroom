import React, { Component } from 'react'
import { Text, StyleSheet, View,SafeAreaView,TouchableOpacity, } from 'react-native'
import ICon from 'react-native-vector-icons/Ionicons'
export default class headerDetail extends Component {
  render() {
    return (
      <View>
        <View
          style={styles.ImageBackground}
          // source={require("../../img/images.jpeg")}
        >
          <SafeAreaView style={styles.Header}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <TouchableOpacity>
                <ICon style={styles.icon} name="ios-arrow-back" />
              </TouchableOpacity>
              <TouchableOpacity>
                <ICon style={styles.icon} name="ios-more" />
              </TouchableOpacity>
            </View>
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
                      Introduction to Computer{" "}
                    </Text>
                    <Text
                      style={{
                        color: "#2b2b2b",
                        fontSize: 11,
                        fontWeight: "200"
                      }}
                    >
                      COM 204
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
                      From: 08:00 am to 09:30
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
                      Tue / Th
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
                    Major: Computer Science
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.background}>
              <View style={styles.com}>
                <Text>South Campus</Text>
              </View>
              <View style={styles.com}>
                <Text>Main Building</Text>
              </View>
              <View style={styles.com}>
                <Text>BIS Lab</Text>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    ImageBackground: {
        height: 250,
        backgroundColor: "#f8f9fa"
      },
      Header: {
        margin: 22
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
        borderColor: "#333",
        borderWidth: 0.6,
        width: 105,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12
      },
})
