/*
 * @Author: your name
 * @Date: 2019-10-22 16:42:54
 * @LastEditTime: 2019-10-25 16:46:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /c:\Users\123\Desktop\react_native_appc:\Users\123\Desktop\weekend_exhibition\src\components\exhibitionItem.js
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
    NativeModules
} from 'react-native';

export default class ExhibitionItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }

    render() {
        const { index, item, lenght,navigation,isList } = this.props;
        return (
            <View style={[styles.exhibitionItem, { marginBottom: index == lenght ? 20 : 0 }]}>
                {
                    index == 0&&!isList ?
                        <Text style={styles.content_title}>—— 最新展讯 ——</Text> : null
                }
                <TouchableHighlight
                    onPress={()=>navigation.push('ExhibitionDetail')}
                    underlayColor='transparent'
                >
                    <View>
                        <View style={styles.exhibition_img_conatiner}>
                            <View style={styles.exhibition_img_left}>
                                <Image resizeMode='cover' style={[styles.exhibition_img, { borderTopLeftRadius: 15, borderBottomLeftRadius: 15 }]} source={require('../assets/images/homePageSwiper/p79444168-2.jpg')}></Image>
                            </View>
                            <View style={styles.exhibition_img_right}>
                                <Image resizeMode='cover' style={[styles.exhibition_img, { height: 98.5, marginBottom: 3, borderTopRightRadius: 15 }]} source={require('../assets/images/homePageSwiper/p79444168-3.jpg')}></Image>
                                <Image resizeMode='cover' style={[styles.exhibition_img, { height: 98.5, borderBottomRightRadius: 15 }]} source={require('../assets/images/homePageSwiper/p79444168-4.jpg')}></Image>
                            </View>
                            <Text style={styles.imgNum}>4</Text>
                        </View>
                        <Text numberOfLines={2} ellipsizeMode='tail' style={styles.exhibition_desc}>{item.title}</Text>
                        <Text style={styles.exhibition_info}>目的地：{item.place}</Text>
                        <Text style={styles.exhibition_info}>时间：{item.date}</Text>
                    </View>
                </TouchableHighlight>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    //展览列表
    exhibitionItem: {
        width: '100%',
        marginTop: 10,
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    exhibition_img_conatiner: {
        width: '100%',
        flexDirection: "row",
        position:"relative"
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
    exhibition_info: {
        color: '#A4A8AF',
        fontSize: 14,
        marginTop: 5
    },
    //标题
    content_title: {
        width: '100%',
        textAlign: "center",
        lineHeight: 50,
        fontSize: 16
    },
    //图片数量
    imgNum:{
        borderRadius:10,
        backgroundColor:"rgba(0,0,0,0.5)",
        color:'#fff',
        position:"absolute",
        minHeight:30,
        minWidth:30,
        textAlign:"center",
        textAlignVertical:"center",
        fontSize:16,
        right: 15,
        bottom:15,
        padding:5
    }
});