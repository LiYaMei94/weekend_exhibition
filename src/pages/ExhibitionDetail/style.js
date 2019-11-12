/*
 * @Author: your name
 * @Date: 2019-10-23 16:23:40
 * @LastEditTime: 2019-10-25 16:54:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /c:\Users\123\Desktop\react_native_appc:\Users\123\Desktop\weekend_exhibition\src\pages\ExhibitionDetail\style.js
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {headerHeight, greyBG, headerPaddingTop, headerRightMarginRight,themeColor} from '../../assets/css/common';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        backgroundColor:greyBG,
    },
    //轮播图
    swiper_item: {
        width: '100%',
        height: 300
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
    //头部标题栏
    headerRightButtonBox: {
        marginRight: headerRightMarginRight,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:50,
        backgroundColor:"rgba(0,0,0,0.5)"
    },
    headerRightButton:{
        fontSize:30,
        fontFamily: "iconfont",
        color:"#fff"
    },
    ExhibitionDetailContent:{
        
    },
    exhibition_desc: {
        fontSize: 17,
        lineHeight: 20,
        marginTop: 10,
        marginBottom:8,
        paddingLeft: headerRightMarginRight,
        paddingRight: headerRightMarginRight,
    },
    exhibitionInfoLine:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:5
    },
    lineText:{
        fontSize:15
    },
    lineIcon:{
        fontFamily:"iconfont",
        color:themeColor,
        fontSize:20,
        marginRight:8
    },

    exhibition_info: {
        color: '#999',
        fontSize: 15,
        flex:1,
        paddingLeft:28
    },
    right_icon:{
        fontFamily:"iconfont",
        color: '#999',
        fontSize:20
    },
    xhibitionDetailInfo:{
        padding: headerRightMarginRight,
        backgroundColor:'#fff',
        marginTop:10,
    },
    overviewLine:{
        marginBottom:30
    },
    describeText:{
        fontSize:15,
        lineHeight:22
    },
    describeImg:{
        width:'100%',
        marginTop:10,
        marginBottom:10
    }
});