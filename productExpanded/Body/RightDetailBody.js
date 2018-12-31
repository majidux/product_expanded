import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class RightDetailBody extends Component {
    render() {
        return (
                <View style={styles.infoBox}>
                    <View style={styles.firstHead}>
                        <Image
                            source={require('../image/pointUp.png')}
                        />
                        <Text>اطلاعات</Text>
                    </View>
                    <View style={styles.secondHead}><Text>کاربره (ویرایش پیشرفته) ۵۰۰ بسته</Text></View>
                    <View style={styles.thirdHead}><Text>کاربر اضافه (ویرایش تحت وب)</Text><Text>۱۷</Text></View>
                    <View style={styles.forthHead}><Text>کاربرب (ویرایش تحت وب) ۳۰۰ بسته</Text></View>
                    <View style={styles.fifthHead}><Text>کاربر (ویرایش تحت وب ) ۱۰ بسته</Text></View>
                </View>
        );
    }
}
const styles = StyleSheet.create({

    infoBox:{
        flex: .4,
        justifyContent: 'center',
        borderColor:'#efefef',
        borderWidth: 2,
        marginBottom: 10
    },
    firstHead:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        flex:.24,
        
    },
    secondHead:{
        flex:.19,
        backgroundColor: '#f3f6fa',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    thirdHead:{
        flex:.19,
        justifyContent: 'space-between',
        flexDirection:'row-reverse',
        alignItems:'center',
        paddingHorizontal: 30,
    },
    forthHead:{
        flex:.19,
        backgroundColor: '#f3f6fa',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    fifthHead:{
        flex:.19,
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
});