//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// create a component
class Category extends Component {
    render() {
        const {Salary} = this.props
        return (
            <View style={styles.container}>
                <View style={styles.cate}>
                    <View style={styles.row}>
                        <TouchableOpacity style={[styles.item, styles.c1,]} onPress={Salary}>
                            <View style={styles.row}>
                                <Image source={require('../img/salary.png')} style={styles.img}></Image>
                                <Text style={styles.txt}>Salary Slips</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.space}></View>
                        <TouchableOpacity style={[styles.item, styles.c2]}>
                            <View style={styles.row}>
                                <Image source={require('../img/assignment.png')} style={styles.img}></Image>

                                <Text style={styles.txt}>Assignment</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.space}></View>
                    <View style={styles.row}>
                        <TouchableOpacity style={[styles.item, styles.c3]}>
                            <View style={styles.row}>
                                <Image source={require('../img/grade.png')} style={styles.img}></Image>

                                <Text style={styles.txt}>Grade Shift</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.space}></View>
                        <TouchableOpacity style={[styles.item, styles.c4]}>
                            <View style={styles.row}>
                                <Image source={require('../img/attendent.png')} style={styles.img}></Image>
                                <View >
                                <Text style={styles.txt}>My Attendent</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    cate: {
        height: 140,
        margin: 15,

    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    item: {
        height: 65,
        borderRadius: 5,
        flex: 1,
        justifyContent: 'center',
        
        paddingLeft: 12

    },

    c1: {
        backgroundColor: '#C25851'
    },
    c2: {
        backgroundColor: '#5D9FD4'
    },
    c3: {
        backgroundColor: '#F0C632'
    },
    c4: {
        backgroundColor: '#D365A8'
    },
    img: {
        width: 40,
        height: 40,
        marginRight: 10

    },
    space: {
        width: 15,
        height: 10,

    },
    txt: {
        fontSize: 15,
        fontWeight: '600',
        color:'#fff'
    }
});

//make this component available to the app
export default Category;
