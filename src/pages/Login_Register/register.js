/*
 * @Author: your name
 * @Date: 2019-10-25 17:57:35
 * @LastEditTime: 2019-10-25 17:58:09
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\weekend_exhibition\src\pages\Login_Register\register.js
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Image
} from 'react-native';
import { styles } from './style';
import { themeColor } from '../../assets/css/globalCss';
import { getAuthCode, register } from '../../network/api';
let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
export default class Registered extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                account: '',
                pwd: '',
                spwd: "",
                captcha: ""
            },
            isShowAuthCode: false,
            errorText: "",
            authCodeUrl: ''
        };
    }




    componentDidMount() {

    }
    getAuthCodeClick() {
        let value = this.state.userInfo;
        let errorText = '';
        let isShowAuthCode = false;
        if (value.account != '') {
            getAuthCode({ account: value.account }).then((res) => {
                console.log(res)
                this.setState({
                    //authCodeUrl: res.img
                })
            })
            //isShowAuthCode = true;
        } else {
            errorText = '请输入手机号！';
        }
        this.setState({
            errorText: errorText,
            isShowAuthCode: isShowAuthCode
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
    registered() {
        let value = this.state.userInfo;
        let errorText = '';
        if (value.captcha != '' && value.pwd != '' && value.spwd != '') {
            if (value.pwd == value.spwd) {
                if (value.pwd.length > 6 && value.pwd.length < 20 && reg.test(value.pwd) && value.spwd.length > 6 && value.spwd.length < 20 && reg.test(value.spwd)) {
                    //提交注册
                    register(value).then((res) => {
                        if(res.code){
                            if(res.code==-10002){//用户名存在
                                
                            }else if(res.code==-10003){//验证码错误

                            }
                        }else{
                            this.props.navigation.push('Login',{isRegister:true});
                        }
                        this.setState({
                            errorText: res.msg
                        })
                        console.log(res)
                    }).catch((error) => {
                        errorText = error;
                    })
                } else {
                    errorText = '输入的密码格式不正确';
                }
            } else {
                errorText = '两次输入的密码不一致';
            }
        } else {
            errorText = '验证码或密码不能为空';
        }
        this.setState({
            errorText: errorText
        })
    }
    render() {
        const { isShowAuthCode, errorText, authCodeUrl } = this.state;
        return (
            <View style={[styles.container]}>
                <View style={[styles.account_password_login]}>
                    <TextInput style={styles.inputStyle} onChangeText={(text) => this.changeText('account', text)} selectionColor={themeColor} placeholder='请输入手机号' ></TextInput>

                    {
                        isShowAuthCode ?
                            <View>
                                <View style={styles.authCodeContainer}>
                                    <TextInput style={styles.inputStyle} onChangeText={(text) => this.changeText('captcha', text)} selectionColor={themeColor} placeholder='请输入验证码' ></TextInput>
                                </View>
                                <TextInput style={styles.inputStyle} onChangeText={(text) => this.changeText('pwd', text)} selectionColor={themeColor} placeholder='请输入6~20位数字字母组合的密码' maxLength={20} secureTextEntry={true}></TextInput>
                                <TextInput style={styles.inputStyle} onChangeText={(text) => this.changeText('spwd', text)} selectionColor={themeColor} placeholder='请确认密码' maxLength={20} secureTextEntry={true}></TextInput>
                            </View>
                            : null
                    }
                    {
                        errorText != '' ? <Text style={styles.errorText}>{errorText}</Text> : null
                    }
                    <TouchableHighlight
                        onPress={isShowAuthCode ? this.registered.bind(this) : this.getAuthCodeClick.bind(this)}
                        underlayColor={themeColor}
                        style={[styles.loginBtn, { marginTop: errorText == '' ? 30 : 2 }]}>
                        <Text style={styles.buttonText}>{isShowAuthCode ? '注册' : "下一步"}</Text>
                    </TouchableHighlight>
                    <View style={styles.promptContainer}>
                        <Text style={{ fontSize: 14 }}>已有账号？</Text>
                        <TouchableHighlight
                            onPress={() => this.props.navigation.push('Login',{isRegister:true})}
                            underlayColor='transparent'
                            style={{}}>
                            <Text style={styles.promptText} >立即登录</Text>
                        </TouchableHighlight>
                    </View>
                </View>

            </View>

        )
    }
}


