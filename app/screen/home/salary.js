//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import headerAcc from  '../../components/headerAcc'

// create a component
class SalaryScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            <SafeAreaView>
              <HeaderAcc
        // subject={name}
        // courseCode={code}
        // fromH={fromHours}
        // toH={toHours}
        // date={date}
        // major={major.MajorName}
        // floor={floor.name}
        // roomName={RoomName}
        // building={building.name}
        onBack={() => this._onBack()}
      />
      </SafeAreaView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        backgroundColor: '#f7f9fa',
    },
});

//make this component available to the app
export default SalaryScreen;
