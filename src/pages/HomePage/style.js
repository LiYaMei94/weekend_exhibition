/*
 * @Author: your name
 * @Date: 2019-10-22 13:39:18
 * @LastEditTime: 2019-10-23 14:00:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /c:\Users\123\Desktop\react_native_appc:\Users\123\Desktop\weekend_exhibition\src\pages\HomePage\style.js
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { headerHeight, greyBG, headerPaddingTop, headerRightMarginRight } from '../../assets/css/common';
export const styles = StyleSheet.create({
    container: {
        flex:1,
        position: "relative",
        backgroundColor: greyBG,
    },
    //头部标题栏
    headerRightButtonBox: {
        marginRight: headerRightMarginRight,
        width: headerHeight-headerPaddingTop,
        height: headerHeight-headerPaddingTop,
        justifyContent: "center",
        alignItems: "center",

    },
    headerRightButton:{
        fontSize:24,
        fontFamily: "iconfont",
    },
    //轮播图
    swiper_item: {
        width: '100%',
        height: 200
    },
    swiper_img: {
        width: '100%',
        height: '100%'
    },
    content_item: {
        marginTop: 10,
        backgroundColor: '#fff',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    //标签
    tabItem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    tabName: {
        fontSize: 16,
        color: '#4C4E58',
    },
    tabIcon: {
        fontFamily: "iconfont",
        color: '#4C4E58',
        marginTop: 5,
        fontSize: 30
    },



});
