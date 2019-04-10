import React, { Component } from "react";
import {
    Text,
    StyleSheet,
    View,
    SafeAreaView,
    TouchableOpacity
} from "react-native";
import ICon from "react-native-vector-icons/Ionicons";
export default (HeaderAcc = ({
    subject,
    courseCode,
    fromH,
    toH,
    date,
    major,
    floor,
    roomName,
    building,
    onBack,
    status
}) => {

    return (

        <SafeAreaView style={styles.tHeader}>
            <View style={styles.header}>
                <View style={[styles.row]}>
                    <TouchableOpacity
                        onPress={onBack} style={{ flex: 1 }}>
                        <ICon style={styles.icon} name="ios-arrow-back" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <ICon style={styles.icon} name="ios-more" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>


    );
});

const styles = StyleSheet.create({
    tHeader: {
        color: '#2b2b2b',
        flex: 1,
        
    },
    header: {
        height: 50,
        marginRight: 16,
        marginLeft: 16,
        color: '#2b2b2b'
    },
    icon: {
        fontSize: 28,
        color: "#2b2b2b"
    },
    si: {
        fontSize: 14,
        color: "#2b2b2b",
        marginRight: 12,

    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        // marginBottom: 5
    },
    m10: {
        marginBottom: 10
    },

    com: {
        flexDirection: 'row',
    },
    text: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "200"
    }
});
