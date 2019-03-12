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
  color
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
          backgroundColor: "#f7f9fa"
        }}
      >
        <View style={{ marginLeft: 12 }}>
          <Text style={{ fontSize: 16 }}>Hy Dely Ethan</Text>
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
          <TouchableWithoutFeedback
            onPress={onSelected}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
          >
            <View style={styles.center}>
              <ICon
                style={{ fontSize: 28, color: color }}
                name="ios-done-all"
              />
              <Text style={{ color: color }}>Present</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableOpacity>
            <View style={styles.center}>
              <ICon style={{ fontSize: 26 }} name="ios-speedometer" />
              <Text>Late</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.center}>
              <ICon style={{ fontSize: 28 }} name="ios-close" />
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
  }
});
