/*
 * @Author: your name
 * @Date: 2019-10-25 17:57:35
 * @LastEditTime: 2019-10-25 17:57:53
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\weekend_exhibition\src\pages\Login_Register\login.js
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableHighlight,
    DeviceEventEmitter
} from 'react-native';
import ShareUtil from '../../../libs/ShareUtil';
import { themeColor } from '../../assets/css/globalCss';
import { styles } from './style';
import { login } from '../../network/api';

import { storage } from '../../utils/storage';

const platfrom = [
    {
        index: 2,
        icon: '\ue607',
        bgColor: '#8DC81B'
    },
    {
        index: 0,
        icon: '\ue752',
        bgColor: '#68A5E1'
    },
    {
        index: 1,
        icon: '\ue63d',
        bgColor: '#FB9315'
    },
    {
        index: 7,
        icon: '\ue63a',
        bgColor: '#3B5997'
    },
    {
        index: 8,
        icon: '\uec9c',
        bgColor: '#28AAE1'
    }
]
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            errorText: '',
            isRegister:props.navigation.getParam('isRegister', false),
        };

    }



    componentDidMount() {

    }
    //用户名密码登录
    _login() {
        let errorText = '';
        let value = this.state.userInfo;
        if (value.account != '' && value.pwd != '') {
            login(value,this).then((res) => {
                //登录成功储存token
                let userInfo={
                    avatar:res.avatar,
                    nickname:res.nickname,
                    uid:res.uid,
                }
                storage('token', res.token);
                storage('userInfo', JSON.stringify(userInfo));
                DeviceEventEmitter.emit('userInfoUpdate', {});
                if(this.state.isRegister){
                    this.props.navigation.push('bottomTabNavigator');
                }else{
                    this.props.navigation.goBack();
                }
            })

        } else {
            errorText = '用户名和密码不能为空';
        }
        this.setState({
            errorText: errorText
        })
    }

    changeText(type, text) {
        let value = this.state.userInfo;
        value[type] = text;
        this.setState({
            userInfo: value,
            errorText: ''
        })
    }
    //第三方登录
    other_login(platfrom) {
        var list = [0, 1, 2, 3, 4, 7, 8];//0:qq,1:新浪, 2:微信, 3:微信朋友圈,4:qq空间, 7:Facebook, 8:Twitter 
        ShareUtil.auth(platfrom, (code, result, message) => {
            console.warn(result)
            if (code == 200) {
                this.setState({ userInfo: result });
                this.props.navigation.goBack();
            }
        });
    }
    render() {
        const { errorText } = this.state;
        return (
            <View style={[styles.container]}>
                <View style={[styles.account_password_login]}>
                    <TextInput style={styles.inputStyle} onChangeText={(text) => this.changeText('account', text)} selectionColor={themeColor} maxLength={20} placeholder='用户名'></TextInput>
                    <TextInput style={styles.inputStyle} onChangeText={(text) => this.changeText('pwd', text)} selectionColor={themeColor} maxLength={20} secureTextEntry={true} placeholder='密码'></TextInput>
                    {
                        errorText != '' ? <Text style={styles.errorText}>{errorText}</Text> : null
                    }
                    <TouchableHighlight
                        onPress={this._login.bind(this)}
                        underlayColor={themeColor}
                        style={[styles.loginBtn, { marginTop: errorText == '' ? 30 : 2 }]}>
                        <Text style={styles.buttonText}>登录</Text>
                    </TouchableHighlight>
                    <View style={styles.promptContainer}>
                        <Text style={{ fontSize: 14 }}>还没有账号？</Text>
                        <TouchableHighlight
                            onPress={() => this.props.navigation.push('Registered')}
                            underlayColor='transparent'
                            style={{}}>
                            <Text style={styles.promptText}>立即注册</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                {/*<View style={styles.others_login}>
            <Text style={{color:'#B7B7B7',fontSize:12}}>第三方登录</Text>
            <View style={styles.others_platfrom}>
              {
                platfrom.map((item,index)=>{
                  return(
                    <TouchableHighlight
                        key={index}
                        onPress={this.other_login.bind(this,item.index)}
                        underlayColor='transparent'
                        style={[styles.platfrom_bg,{backgroundColor:item.bgColor,marginRight:index==platfrom.length-1?0:15}]}>
                        <Text style={{ color: '#ffffff', fontSize: 22,fontFamily: "iconfont", }}>{item.icon}</Text>
                    </TouchableHighlight>
                  )
                })
              }
            </View>
        </View>*/}
            </View>

        )
    }
}