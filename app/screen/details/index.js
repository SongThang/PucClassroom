//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import  DHeader from '../../components/dheader'
// create a component
class DetailScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
            
               
                <DHeader/>
                
        
            <ScrollView>
            <Text>DetailScreen</Text>
            </ScrollView>
            </SafeAreaView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
});

//make this component available to the app
export default DetailScreen;
