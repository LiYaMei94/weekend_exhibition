/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-08 14:31:16
 * @LastEditTime: 2019-10-22 17:37:07
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {headerHeight,greyBG,headerPaddingTop} from '../../assets/css/common';
export const styles = StyleSheet.create({
    container: {
        position: "relative",
        backgroundColor:greyBG,
    },
    //头部标题栏
    header_conatiner:{
        width:'100%',
        height:headerHeight,
        paddingTop:headerPaddingTop,
        backgroundColor:"red",
        borderBottomWidth:1,
        borderBottomColor:'#F1EEE9',
        position:'absolute',
        top:300
    },
    //轮播图
    swiper_item:{
        width:'100%',
        height:200
    },
    swiper_img:{
        width:'100%',
        height:'100%'
    },
    content_item:{
        marginTop:10,
        backgroundColor:'#fff',
        width:'100%',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        paddingBottom:10
    },
    //标签
    tabItem:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    tabName:{
        fontSize:16,
        color:'#4C4E58',
    },
    tabIcon:{
        fontFamily:"iconfont",
        color:'#4C4E58',
        marginTop:5,
        fontSize:30
    },
    
    
    
});
