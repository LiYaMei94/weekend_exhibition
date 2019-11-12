/*
 * @Author: your name
 * @Date: 2019-10-22 10:52:04
 * @LastEditTime: 2019-10-23 11:33:43
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /c:\Users\123\Desktop\react_native_appc:\Users\123\Desktop\weekend_exhibition\App.js
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
