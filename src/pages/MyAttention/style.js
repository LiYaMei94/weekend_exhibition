/*
 * @Author: your name
 * @Date: 2019-10-23 14:22:29
 * @LastEditTime: 2019-10-23 16:12:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /c:\Users\123\Desktop\react_native_appc:\Users\123\Desktop\weekend_exhibition\src\pages\MyAttention\style.js
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {greyBG} from '../../assets/css/common';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        position: "relative",
        backgroundColor:greyBG,
    },
    MyAttentionItem:{
        width:'100%',
        //paddingTop:10,
        //paddingBottom:10,
        backgroundColor:'#fff',
        flexDirection:"row",
        paddingLeft:15,
        paddingRight:15,
        borderBottomColor:'#F1F1F1',
        borderBottomWidth:1,
        height:120,
        alignItems:"center",
        //marginTop:10
    },
    MyAttentionItemLeft:{
        width:100,
        height:100,
        marginRight:10,
        borderRadius:12
    },
    MyAttentionItemRight:{
        flex:3,
        height:'100%',
        justifyContent:"center"
    },
    exhibition_desc: {
        fontSize: 16,
        lineHeight: 20,
        marginTop: 10
    },
    exhibition_info:{
        color:'#A4A8AF',
        fontSize:14,
        marginTop:5
    },
    
});
