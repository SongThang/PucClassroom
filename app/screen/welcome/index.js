import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { inject, observer } from 'mobx-react'
import { auth } from 'react-native-firebase';

@inject("auth")
@observer
export default class WelcomeScreen extends Component {

 componentDidMount(){
     this.props.auth.fetchAuthStateChange(ref=>{
        console.log('ref', ref)
         if(ref){
             this.props.navigation.navigate("Navigation")
         }else{
             this.props.navigation.navigate("Login")
         }
     })
 }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
