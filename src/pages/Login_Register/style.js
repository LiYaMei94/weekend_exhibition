/*
 * @Author: your name
 * @Date: 2019-10-25 17:57:35
 * @LastEditTime: 2019-10-25 17:59:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\weekend_exhibition\src\pages\Login_Register\style.js
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { themeColor } from '../../assets/css/globalCss';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative"
    },
    account_password_login: {
        padding: 35,
        paddingTop: 10
    },
    inputStyle: {
        width: '100%',
        height: 50,
        borderBottomColor: themeColor,
        borderBottomWidth: 1,
        fontSize: 16,

    },
    loginBtn: {
        width: '100%',
        height: 40,
        //borderColor:'#C5837E',
        //borderWidth:1,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        //marginTop:30,
        backgroundColor: themeColor
    },
    others_login: {
        alignItems: "center",
        padding: 35,
        position: "absolute",
        bottom: 0
    },
    others_platfrom: {
        flexDirection: 'row',
        marginTop: 20,
        flexWrap: "wrap",
        justifyContent: "center"
    },
    platfrom_bg: {
        width: 45,
        height: 45,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15,
        marginBottom: 15
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16
    },
    promptContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    promptText: {
        color: themeColor,
        fontSize: 14
    },
    authCodeContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        position: "relative"
    },
    authCode: {
        width: 100,
        height: 40,
        position: "absolute",
        bottom: 5,
        right: 60
    },
    getAuthCodeBtn: {
        width: 100,
        height: 49,
        position: "absolute",
        bottom: 1,
        right: 0,
        backgroundColor: themeColor,
        justifyContent: "center",
        alignItems: "center"
    },
    getAuthCodeBtnText: {
        color: "#fff",
        fontSize: 14
    },
    errorText: {
        fontSize: 12,
        color: "red",
        marginTop: 20,
        width: "100%",
        textAlign: "center"
    },
    updateAuthCode: {
        position: "absolute",
        height: 40,
        bottom: 5,
        right: 0,
        justifyContent: "center",
        alignItems: "center"
    },
    updateAuthCodeText: {
        color: '#667F86',
        fontSize: 14,
    }

});
