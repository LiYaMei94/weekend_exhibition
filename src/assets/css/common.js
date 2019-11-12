/*
 * @Author: your name
 * @Date: 2019-10-22 13:47:01
 * @LastEditTime: 2019-10-23 17:12:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /c:\Users\123\Desktop\react_native_appc:\Users\123\Desktop\weekend_exhibition\src\assets\css\common.js
 */

import React, { Component } from 'react';
import { StatusBar, Platform, Dimensions } from "react-native";
//判断手机设备
// iPhone X、iPhone XS
const X_WIDTH = 375;
const X_HEIGHT = 812;

// iPhone XR、iPhone XS Max
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const DEVICE_SIZE = Dimensions.get('window');
const { height: D_HEIGHT, width: D_WIDTH } = DEVICE_SIZE;

export const isiOS = () => Platform.OS === 'ios'

export const isiPhoneX = () => {
    return (
        isiOS() &&
        ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
            (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT)) ||
        ((D_HEIGHT === XSMAX_HEIGHT && D_WIDTH === XSMAX_WIDTH) ||
            (D_HEIGHT === XSMAX_WIDTH && D_WIDTH === XSMAX_HEIGHT))
    );
};

//获取状态栏的高度
export const STATUS_BAR_HEIGHT = isiOS() ? (isiPhoneX() ? 34 : 20) : StatusBar.currentHeight;

export const headerHeight = STATUS_BAR_HEIGHT + 44;//标题栏的高度
export const headerPaddingTop = STATUS_BAR_HEIGHT;//标题栏的paddingtop
export const headerRightMarginRight=15;//标题栏右边按钮距边界的距离


export const Size = Dimensions.get('window');
export const ScreenWidth = Size.width;
export const ScreenHeight = Size.height;


export const borderColor='#EEEDEB';

export const greyBG='#F3F3F3';

export const themeColor='#FBB03B';

export const globalStyle={
  iconFont:{
    fontFamily: 'iconfont',
  }
}