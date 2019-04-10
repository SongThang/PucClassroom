//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
class Schedule extends Component {
    render() {
        const { onClick, roomname, fromTime, toTime, subject } = this.props
        return (
            <TouchableOpacity onPress={onClick}>
                <View style={styles.list}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 5, height: 130, backgroundColor: '#CC61C8' }}></View>
                        <View style={styles.container}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.text}>{roomname}</Text>
                                </View>
                                <View >
                                    <View style={styles.status} backgroundColor="#EDEFEE">
                                        <Text style={{ color: '#CC61C8', fontWeight: '600' }}>Check In</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginRight: 12 }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.textVerify}>{fromTime} to {toTime}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.txtProf}>{subject}</Text>
                                    
                                </View>
                            </View>

                        </View>
                        <View >
                        </View>

                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    profText: { fontSize: 24, fontWeight: '200' },
    centerRow: { flexDirection: 'row', display: 'flex', alignItems: 'center', },
    list: {
        height: 140,
        paddingLeft: 12,
        paddingRight: 12,
        borderBottomColor: "#f7f9fa",
        borderBottomWidth: 10,
        backgroundColor: '#fff'

    },
    container: {
        paddingLeft: 12,
        flexDirection: 'column',
        flex: 1,

    },
    icon: {
        width: 45,
        height: 45,
        overflow: 'hidden'
    },
    prof: {



    },
    txtProf: {
        fontSize: 16,
        fontWeight: '400'
    },
    txtProf1: {
        fontSize: 12,
        fontWeight: '200'
    },
    status: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        paddingLeft: 15,
        paddingRight: 15,
        height: 30,
        borderRadius: 25
    },
    spacing: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    time: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: -15
    },
    listVerify: {
        height: 65,
        display: 'flex',
        justifyContent: 'center',
        // flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 16,

        borderBottomColor: "#f7f9fa",
        borderBottomWidth: 10,
        // borderTopColor: "#f7f9fa",
        // borderTopWidth: 5,

    },
    // icon: {
    //     fontSize: 18,
    //     fontWeight: 'bold',
    //     color: '#CC61C8',
    // },
    item: {
        marginTop: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',



    },
    room: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    text: {
        fontSize: 17,


        fontWeight: '600'

    },
    textVerify: {
        fontSize: 14,
        fontWeight: '100'

    },
    c1: {
        width: 56,
        height: 56,
        backgroundColor: '#CC61C8',
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
    c2: {
        width: 52,
        height: 52,
        backgroundColor: '#fff',
        borderRadius: 26,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default Schedule;
