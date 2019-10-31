import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import {colors} from '../../utils'

export default class Loginform extends Component {
    render() {
        return (

            <View  
                 style = {styles.container}>
                     <Text style = {styles.title}>Log In</Text>
                            <View style = {styles.textInputContainer}>
                                    <TextInput
                                        placeholder = 'username'
                                        style = {styles.inputTextStyle}
                                     />

                                    <TextInput
                                        placeholder = 'password'
                                        style = {styles.inputTextStyle}
                                    />
                            </View>
                            <Text style = {styles.forgotPasswordStyle}>Forgot Password?</Text>
                        <TouchableOpacity 
                            style = {styles.buttonSubmit}>
                            <Text style = {styles.buttonTextStyle}>Login</Text>
                         </TouchableOpacity>
                         <Text style = {styles.textStyle}>Or Log In With A Social Account</Text>
                         <View style = {styles.socialButtonContainer}>
                         <TouchableOpacity 
                            style = {styles.socialLoginButtonStyle}>
                            <Text style = {styles.socialButtonTextStyle}>Google</Text>
                         </TouchableOpacity>
                         <TouchableOpacity 
                            style = {styles.socialLoginButtonStyle}>
                            <Text style = {styles.socialButtonTextStyle}>Facebook</Text>
                         </TouchableOpacity>
                         </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
container : {
    marginTop : 20,
    width : '100%',
    paddingRight : 15,
    paddingLeft : 15,
},
inputTextStyle : {
    marginBottom : 20,
    borderBottomWidth : 1,
    paddingLeft : 0,
    borderBottomColor : colors.primaryDark,
},
buttonSubmit:{
    backgroundColor : colors.primaryDark,
    paddingVertical : 15,
    marginTop : 45,
    borderRadius : 25,
},
buttonTextStyle:{
    textAlign : 'center',
    color : colors.white
},
title:{
    fontWeight : '700',
    fontSize : 25,
    color : colors.primaryDark,
},
textInputContainer : {
    marginTop : 35,
},
forgotPasswordStyle:{
    textAlign : 'right',
    fontWeight : '500'
},
textStyle:{
    marginTop : 25,
    textAlign : 'center',
    fontSize : 16,

},
socialLoginButtonStyle: {
borderWidth : 1,
width : '50%',
paddingVertical : 10,
marginRight : 10,
borderRadius : 25,
},
socialButtonContainer : {
    marginTop : 25,

    flexDirection : 'row'
},
socialButtonTextStyle : {
    color : colors.primaryDark,
    textAlign : 'center',
     
}
});