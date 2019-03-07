//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// create a component
class Category extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cate}>
                    <View style={styles.row}>
                        <TouchableOpacity style={[styles.item, styles.c1]}>
                            <View style={styles.row}>
                                <Image source={require('../img/assignment.png')} style={styles.img}></Image>

                                <Text style={styles.txt}>Assignment</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.space}></View>
                        <TouchableOpacity style={[styles.item, styles.c2]}>
                            <View style={styles.row}>
                                <Image source={require('../img/homework.png')} style={styles.img}></Image>

                                <Text style={styles.txt}>Homework</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.space}></View>
                    <View style={styles.row}>
                        <TouchableOpacity style={[styles.item, styles.c3]}>
                            <View style={styles.row}>
                                <Image source={require('../img/quest.png')} style={styles.img}></Image>

                                <Text style={styles.txt}>Quiz</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.space}></View>
                        <TouchableOpacity style={[styles.item, styles.c4]}>
                            <View style={styles.row}>
                                <Image source={require('../img/research.png')} style={styles.img}></Image>

                                <Text style={styles.txt}>Research</Text>
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
        backgroundColor: '#EDEFEE',
        paddingLeft: 12

    },

    color: {
        backgroundColor: '#EDEFEE'
    },
    img: {
        width: 45,
        height: 45,
        marginRight: 10

    },
    space: {
        width: 15,
        height: 10,

    },
    txt: {
        fontSize: 16,
        fontWeight: '100'
    }
});

//make this component available to the app
export default Category;
