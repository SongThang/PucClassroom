//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import PHeader from '../../components/pheader'
import Header from '../../components/header'
import {inject, observer} from 'mobx-react'
// create a component
@inject("auth")
@observer
class ProfileScreen extends Component {
    _onBack = ()=>{
        this.props.navigation.goBack()
    }
    _onSignOut=()=>{
        this.props.auth.logOut()
        this.props.navigation.navigate("Login")
    }


    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.container}>
                    {/* <Header /> */}
                    <ScrollView >

                        <PHeader onClick={()=>this._onBack()} onSignOut={()=>this._onSignOut()} />
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
