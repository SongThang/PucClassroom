//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import PHeader from '../../components/pheader'
import Header from '../../components/header'
// create a component
class ProfileScreen extends Component {
    render() {
        _onBack = ()=>{
            this.props.navigation.goBack()
        }
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.container}>
                    {/* <Header /> */}
                    <ScrollView >

                        <PHeader onClick={_onBack}/>
                        <View style={styles.buttom}></View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    buttom:{
        borderBottomWidth:15,
        borderBottomColor: '#f7f9fa'
    }
});

//make this component available to the app
export default ProfileScreen;
