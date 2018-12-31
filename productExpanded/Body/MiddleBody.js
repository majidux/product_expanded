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
                        <View style={styles.progressBarWrapper}>
                            <View style={styles.progressBarOut}><View style={styles.progressBarIn}></View></View>
                            <View style={styles.dateProgressBar}><Text>۹۷/۹/۲۵</Text></View>
                        </View>
                        <View style={styles.progressBarWrapper}>
                            <View style={styles.progressBarOut2}><View style={styles.progressBarIn2}></View></View>
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.subFooter}><Text>Hello</Text></View>
                        <View style={styles.subFooter}><Text>Hello</Text></View>
                        <View style={styles.subFooter}><Text>Hello</Text></View>
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
        paddingTop: 17,
        flex: .1
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
    progressBarOut: {
        backgroundColor: '#b6bcc2',
        // flex:.1,
        flexDirection: 'row',
        width: 200,
        height: 8,
        borderRadius: 5,
    },
    progressBarIn: {
        backgroundColor: '#2d3f4f',
        flex: .7,
        borderRadius: 5,
        
    },
    
    progressBarOut2: {
        backgroundColor: '#b6bcc2',
        // flex:.1,
        flexDirection: 'row',
        width: 100,
        height: 8,
        borderRadius: 5
    },
    progressBarIn2: {
        backgroundColor: '#2d3f4f',
        flex: .7,
        borderRadius: 5
        
    },
    dateProgressBar: {
        flex: .8
    },
    progressBarWrapper: {
        // flex:.4
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    progressBarViews: {
        // flex:.1,
        marginLeft:70,
        width: 400,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        // backgroundColor: 'blue'
        marginBottom: 10,
        
    },
    footer: {
        flexDirection: 'row',
        flex: .4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subFooter: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center'
    },
    
    
});