/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 17:29:20
 * @LastEditTime: 2019-10-22 15:00:15
 * @LastEditors: Please set LastEditors
 */


import React, { Component } from 'react';
import {} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { YellowBox } from 'react-native';
import { router } from './src/router';//引入路由文件
import SplashScreen from 'react-native-splash-screen';//启动页
const AppContainer = createAppContainer(router);
export default class App extends React.Component {
    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
            'Warning: componentWillReceiveProps has been renamed',
        ]);
    }
    componentDidMount() {
        // 组件加载完毕之后，隐藏启动页
        this.timer = setTimeout(() => {
            SplashScreen.hide();
        }, 900)
    }
    //卸载计时器
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);//同时为真的才执行卸载
    }
    render() {
        return (
            <AppContainer />
        );
    }
}
