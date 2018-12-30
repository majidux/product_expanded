import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class MiddleBody extends Component {
    render() {
        return (
            <View style={styles.middleBody}>
                <Text>Middle</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    middleBody: {
        backgroundColor: 'red',
        flex: .42
    },
});