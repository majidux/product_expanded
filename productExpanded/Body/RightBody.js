import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import RightDetailBody from "./RightDetailBody";
import RightModuleProduct from "./RightModuleProduct";

export default class RightBody extends Component {
    render() {
        return (
            <View style={styles.rightBody}>
                <View style={styles.headerProduct}>
                    <Image
                        source={require('../image/crossProductHeader.png')}
                    />
                    <Text style={{fontWeight: 'bold',fontSize:20,color:'white'}}>جزئیات محصول</Text>
                </View>
                <View style={styles.mainBody}>
                    <RightDetailBody/>
                    <RightModuleProduct/>
                    <View style={styles.suggestModule}>
                        <Image
                            source={require('../image/pointDown.png')}
                        />
                        <Text style={{fontWeight: 'bold',fontSize:15}}>ماژول های پیشنهادی</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    rightBody: {
        backgroundColor: 'white',
        flex: .58,
        borderLeftWidth: 4,
        borderLeftColor: '#efefef',
    },
    mainBody:{
        flex: .93,
        margin:20,
        marginBottom: 0,
    },
    headerProduct:{
        justifyContent: 'space-between',
        flex:.07,
        alignItems: 'center',
        backgroundColor:'#2fb5ac',
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    suggestModule:{
        flexDirection: 'row',
        borderWidth: 1,
        borderColor:'#e7e7e7',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:10,
        flex:.1,
        paddingHorizontal: 25,
    }
});