/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 10:40:00
 * @LastEditTime: 2019-10-22 17:50:02
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { Easing, Animated,Text,StyleSheet } from "react-native";
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { STATUS_BAR_HEIGHT,headerPaddingTop,headerHeight } from './assets/css/common';



//路由文件

import HomePage from './pages/HomePage/html';
import MinePage from './pages/MinePage/html';
import ExhibitionList from './pages/ExhibitionList/html';

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
                RumMinePageors: {
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
                title: '展览列表',
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
                //borderBottomWidth:1,
                //borderBottomColor:'#F1EEE9'
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