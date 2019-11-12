/*
 * @Author: your name
 * @Date: 2019-10-22 12:00:18
 * @LastEditTime: 2019-10-24 11:39:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /c:\Users\123\Desktop\react_native_appc:\Users\123\Desktop\weekend_exhibition\src\router.js
 */

import React, { Component } from 'react';
import { Easing, Animated,Text,StyleSheet } from "react-native";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { STATUS_BAR_HEIGHT,headerPaddingTop,headerHeight } from './assets/css/common';



//路由文件
import HomePage from './pages/HomePage/html';
import MinePage from './pages/MinePage/html';
import ExhibitionList from './pages/ExhibitionList/html';
import MyAttention from './pages/MyAttention/html';
import ExhibitionDetail from './pages/ExhibitionDetail/html';

import AboutPage from './pages/SystemPage/AboutPage';
import UserAgreement from './pages/SystemPage/UserAgreement';
import SettingPage from './pages/SystemPage/SettingPage';

//底部tabbar的图标
const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let iconName;
    if (routeName === '展讯') {
        iconName = '\ue653';
    } else if (routeName === '我的') {
        iconName = '\ue611';
    }else{
        
    }
    return <Text style={[styles.iconStyle,{color:tintColor}]}>{iconName}</Text>;
};


//底部tabbar
const TabNavigator = createBottomTabNavigator(
    {
        
        展讯: createStackNavigator(
            {
                HomePage: {
                    screen: HomePage,
                    navigationOptions: {
                    },
                },
            }
        ),
        我的: createStackNavigator(
            {
                MinePage: {
                    screen: MinePage,
                    navigationOptions: {
                        header: null,
                    },
                }
            }
        ),
    },
    {
        defaultNavigationOptions: ({ navigation }) => (
            {
                tabBarIcon: ({ focused, tintColor }) =>
                    getTabBarIcon(navigation, focused, tintColor),
                    
            }
        ),
        tabBarOptions: {
            activeTintColor: '#000',
            inactiveTintColor: '#989898',
            style: {
                backgroundColor: '#ffffff',
                borderTopColor: "transparent",
                borderTopWidth:1,
                borderTopColor:'#F1EEE9'
            },
        },
    }
);

//创建全局导航器createStackNavigator
export const router = createStackNavigator(
    {
        bottomTabNavigator: {
            screen: TabNavigator,
            navigationOptions: {
                header: null,
            },
        },
        ExhibitionList:{
            screen: ExhibitionList,
            navigationOptions: {
                //title: '展览列表',
            },
        },
        MyAttention:{
            screen: MyAttention,
            navigationOptions: {
                title: '关注的展览',
            },
        },
        ExhibitionDetail:{
            screen: ExhibitionDetail,
            navigationOptions: {},
        },
        AboutPage:{
            screen: AboutPage,
            navigationOptions: {
                title: '关于 | 周末看展',
            },
        },
        UserAgreement:{
            screen: UserAgreement,
            navigationOptions: {
                title: '用户协议',
            },
        },
        SettingPage:{
            screen: SettingPage,
            navigationOptions: {
                title: '设置',
            },
        }
    },
    {
        initialRouteName: "bottomTabNavigator",
        mode: 'modal',
        defaultNavigationOptions: {
            headerStyle: {
                height: headerHeight,
                paddingTop: headerPaddingTop,
                elevation: 0,  // android去除阴影
                backgroundColor:"#fff",
                borderBottomWidth:1,
                borderBottomColor:'#F1EEE9'
            },
            headerTitleStyle: {
                fontWeight: 'normal',
                fontSize:15
            },
            headerTintColor: '#666',
        },
    }
)

const styles = StyleSheet.create({
    iconStyle:{
        fontFamily: "iconfont",
        fontSize: 25,
    }
})

