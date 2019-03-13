//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ImageBackground,Image } from 'react-native';

// create a component
class GradeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                  {/* <Image style={{width:300,height:250}} source={require('https://cdn.dribbble.com/users/1162077/screenshots/5403918/focus-animation.gif')}/> */}
                <Text>GradeScreen</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default GradeScreen;
