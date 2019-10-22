/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 17:29:20
 * @LastEditTime: 2019-10-22 17:21:13
 * @LastEditors: Please set LastEditors
 */


import React, { Component } from 'react';
import { 
    Text, 
    StyleSheet, 
    ScrollView,
    View, 
    TouchableHighlight, 
    Dimensions, 
    Animated, 
    DeviceEventEmitter, 
    PanResponder,
    Image, 
    NativeModules } from 'react-native';

export default class ExhibitionItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }

    render() {
        const {index,item,lenght}=this.props;
        return (
            <View style={[styles.exhibitionItem,{marginBottom:index==lenght?20:0}]}>
                {
                    index==0?
                    <Text style={styles.content_title}>—— 最新展讯 ——</Text>:null
                }
                <View style={styles.exhibition_img_conatiner}>
                    <View style={styles.exhibition_img_left}>
                        <Image resizeMode='cover' style={[styles.exhibition_img, { borderTopLeftRadius: 15, borderBottomLeftRadius: 15 }]} source={require('../assets/images/homePageSwiper/1.jpg')}></Image>
                    </View>
                    <View style={styles.exhibition_img_right}>
                        <Image resizeMode='cover' style={[styles.exhibition_img, { height: 98.5, marginBottom: 3, borderTopRightRadius: 15 }]} source={require('../assets/images/homePageSwiper/1.jpg')}></Image>
                        <Image resizeMode='cover' style={[styles.exhibition_img, { height: 98.5, borderBottomRightRadius: 15 }]} source={require('../assets/images/homePageSwiper/1.jpg')}></Image>
                    </View>
                </View>
                <Text numberOfLines={2} ellipsizeMode='tail' style={styles.exhibition_desc}>坡峰岭 | 走进被《国家地理》誉为华北最壮观的山地红叶景观！</Text>
                <Text style={styles.exhibition_info}>目的地：坡峰岭·9.6km·轻旅行</Text>
                <Text style={styles.exhibition_info}>时间：本周六、日 7:30</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    //展览列表
    exhibitionItem: {
        width: '100%',
        marginTop:10,
        backgroundColor:'#fff',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        paddingBottom:10
    },
    exhibition_img_conatiner: {
        width: '100%',
        flexDirection: "row",
    },
    exhibition_img_left: {
        flex: 1.8,
        marginRight: 3,
        height: 200
    },
    exhibition_img_right: {
        flex: 1.2,
        height: 200,

    },
    exhibition_img: {
        width: '100%',
        height: 200
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
    //标题
    content_title:{
        width:'100%',
        textAlign:"center",
        lineHeight:50,
        fontSize:16
    },
});