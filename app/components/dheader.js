//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
// create a component
class DHeader extends Component {
    render() {
        const { onClick } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.frame}>
                    

                </View>

            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
      
        height: 210,
        backgroundColor: '#f7f9fa'
    },
    frame: {
      
        backgroundColor: '#ff2b2f'
    },
   

});

//make this component available to the app
export default DHeader;
