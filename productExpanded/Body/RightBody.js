import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class RightBody extends Component {
    render() {
        return (
            <View style={styles.rightBody}>
                <Text>Right</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    rightBody: {
        backgroundColor: 'yellow',
        flex: .58
    }
});