import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import MiddleBody from "./MiddleBody";
import RightBody from "./RightBody";

export default class Body extends Component {
    render() {
        return (
            <View style={styles.body}>
                <MiddleBody/>
                <RightBody/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    body: {
        flex: .77,
        backgroundColor: 'blue',
        flexDirection: 'row',
    },
});