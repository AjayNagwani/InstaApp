import React, { Component } from 'react'
import { Text, View,Image, StyleSheet,StatusBar } from 'react-native'
import Loginform from './Loginform'

export default class Login extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <StatusBar 
                barStyle="light-content"
                />
                    {/* <View style = {StyleSheet.logoContainer}>
                            <Image
                                source = {require('../Images/eiffel.png')}
                                style = {{width:100,height:100}}
                            />   
                            <Text style = {styles.titleText}> A Social App</Text>
                    </View> */}
                    <Loginform style = {styles.formStyle}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems: 'center',
        backgroundColor : '#FAF1FF'
    },
    logoContainer : {
        alignItems : 'center',
        justifyContent : 'center',
    },
    titleText : {
        textAlign : 'center',
        marginTop : 10,
    },
    formStyle : {
        flex : 1,
        backgroundColor : '#ff0'
    }
  });
