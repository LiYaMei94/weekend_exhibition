/*
 * @Author: your name
 * @Date: 2019-10-23 14:22:29
 * @LastEditTime: 2019-10-25 16:59:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /c:\Users\123\Desktop\react_native_appc:\Users\123\Desktop\weekend_exhibition\src\pages\MyAttention\html.js
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
    FlatList,
    Image,
    NativeModules } from 'react-native';
import { styles } from './style';
import {themeColor} from '../../assets/css/common';
export default class MyAttention extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            attentionArr:[require('../../assets/images/homePageSwiper/p79444168-2.jpg'),]
        }
    }
    componentDidMount() {
        
    }
    renderItem({item}){
        return(
            <TouchableHighlight 
                underlayColor='transparent'
                onPress={()=>this.props.navigation.push('ExhibitionDetail',{})}
            >
                <View style={styles.MyAttentionItem}>
                    <Image resizeMode='cover' style={styles.MyAttentionItemLeft} source={item}></Image>
                    <View style={styles.MyAttentionItemRight}>
                        <Text numberOfLines={2} ellipsizeMode='tail' style={styles.exhibition_desc}>穆夏：新艺术运动先锋</Text>
                        <Text style={styles.exhibition_info}>地点：北京 东城区 国家大剧院</Text>
                        <Text style={styles.exhibition_info}>时间：2019年10月19日-2019年12月08日</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
    render() {
        const {attentionArr}=this.state;
        if(attentionArr.length==0){
            return (
                <View style={[styles.container,{justifyContent:"center"}]}>
                    <Text style={{fontSize:50,fontFamily:"iconfont",color:themeColor,marginBottom:10}}>{'\ue609'}</Text>
                    <Text style={{fontSize:15}}>您还没有关注展览哦！</Text>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <FlatList
                    data={attentionArr}
                    keyExtractor={(item,index)=>index+''}
                    renderItem={this.renderItem.bind(this)}
                    style={{width:'100%',}}
                    showsVerticalScrollIndicator={false}
                >

                </FlatList>
            </View>

        );
    }
}
