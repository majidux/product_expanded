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
                        <Text style={{fontWeight: 'bold',fontSize:15}}>ماژول های محصول شما</Text>
                    </View>
                    <View style={styles.secondHead}><Text>استفاده سایر سیستم ها از سرویس های مختلف</Text></View>
                    <View style={styles.thirdHead}><Text>مدیریت انواع فاکتور خرید</Text></View>
                    <View style={styles.forthHead}><Text>ارتباط با فروشگاه آنلاین</Text></View>
                    <View style={styles.fifthHead}><Text>ارسال پیام و برقراری ارتباط مستقیم با مخاطبان از طریق تلگرام</Text></View>
                </View>
        );
    }
}
const styles = StyleSheet.create({

    infoBox:{
        flex: .4,
        justifyContent: 'center',
        borderColor:'#efefef',
        borderWidth: 2
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
        justifyContent: 'center',
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