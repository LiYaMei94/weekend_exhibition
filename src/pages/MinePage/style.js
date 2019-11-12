/*
 * @Author: your name
 * @Date: 2019-10-22 13:39:39
 * @LastEditTime: 2019-10-23 18:51:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /c:\Users\123\Desktop\react_native_appc:\Users\123\Desktop\weekend_exhibition\src\pages\MinePage\style.js
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {greyBG,headerHeight} from '../../assets/css/common';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:greyBG,
        position: "relative"
    },
    mine_top: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: headerHeight,
        paddingBottom:headerHeight,
        backgroundColor: 'white',
        //paddingLeft: 20,
        //paddingRight: 20,
        marginBottom:10
    },
    mine_top_left: {
        flex: 1
    },
    mine_nickname: {
        color: '#fff',
        fontSize: 26,
    },
    mine_like: {
        color: '#ACB1B7',
        marginTop: 5,
    },
    iconStyle: {
        fontFamily: "iconfont",
        fontSize: 45,
        color: '#8E9398'
    },
    mine_content_wrap: {
        width: '100%',
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20,
    },
    mine_content_line: {
        width: "100%",
        height: 50,
        borderBottomColor:'#F1F1F1'
    },
    mine_content_line_wrap: {
        width: "100%",
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    mine_content_line_icon: {
        width: 35,
        color: '#D5D5D5',
        fontSize: 22,
        fontFamily:"iconfont",
        textAlign:"right"
    },
    mine_content_line_text: {
        flex: 1,
        marginLeft: 5,
        color: '#5C5C5C',
        fontSize: 14
    }
});
