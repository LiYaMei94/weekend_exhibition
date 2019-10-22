/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 17:29:20
 * @LastEditTime: 2019-10-22 14:05:25
 * @LastEditors: Please set LastEditors
 */


import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView, View, TouchableHighlight, Dimensions, Animated, DeviceEventEmitter, PanResponder,NativeModules } from 'react-native';
import { styles } from './style';

export default class MinePage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
           
        }
    }
    componentDidMount() {
        
    }
    
    render() {
        
        return (
            <View style={styles.container}>
                <Text>我的</Text>
            </View>

        );
    }
}
