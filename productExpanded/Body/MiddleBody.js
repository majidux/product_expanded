import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default class MiddleBody extends Component {
    render() {
        return (
            <View style={styles.middleBody}>
                <View style={styles.middleBodyBox}>
                    <View style={styles.contractDate}>
                        <Text>تاریخ انقضای قرارداد:</Text>
                    </View>
                    <View style={styles.progressBarViews}>
                        <ScrollView horizontal={true}>
                            <View style={styles.progressBar}>
                                <View></View>
                            </View>
                            <Text></Text>
                            <View style={styles.progressBar}>
                                <View></View>
                            </View>
                            <Text></Text>
                        </ScrollView>
                    </View>
                    <View>
                        <View></View>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    middleBody: {
        backgroundColor: 'red',
        flex: .42,
        paddingLeft: 30,
        paddingTop: 100,
    },
    contractDate: {
        // alignItems: 'center',
        paddingTop: 17,
        flex:.1
    },
    middleBodyBox: {
        flex: .3,
        backgroundColor: 'wheat',
        borderWidth: 4,
        borderRightWidth: 0,
        borderColor: '#efefef',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    progressBar:{
        backgroundColor:'#2d3f4f',
        flex:.2
    },
    progressBarView: {
        flex:1
    }
});