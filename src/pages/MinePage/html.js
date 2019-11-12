/*
 * @Author: your name
 * @Date: 2019-10-22 13:39:39
 * @LastEditTime: 2019-10-23 15:42:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /c:\Users\123\Desktop\react_native_appc:\Users\123\Desktop\weekend_exhibition\src\pages\MinePage\html.js
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
    ImageBackground,
    NativeModules } from 'react-native';
import { styles } from './style';
import HeadPortraits from '../../components/head_portraits';
const lineData=[
    {
        name:'我的关注',
        route:'MyAttention'
    },
    {
        name:"关于",
        route:'AboutPage'
    },
    /*{
        name:"用户、隐私协议",
        route:'ReadCalendar'
    },*/
    {
        name:"设置",
        route:'SettingPage'
    }
]
export default class MinePage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isLogin:true
        }
    }
    componentDidMount() {
        
    }
    
    render() {
        const {isLogin}=this.state;
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/images/homePageSwiper/mineTopBg.jpg')} style={styles.mine_top}>
                    <HeadPortraits style={{marginLeft:30}} navigation={this.props.navigation} width={60} height={60} header_img={''} iconStyleFontSize={45}></HeadPortraits>
                    {
                        isLogin ?
                            <View style={styles.mine_top_left}>
                                <Text style={styles.mine_nickname}>辣辣的草莓酱</Text>
                                <Text style={styles.mine_like}>已加入 3 天</Text>
                            </View> :
                            <TouchableHighlight
                                underlayColor='transparent'
                                onPress={() => this.props.navigation.push('Login')}
                                style={[styles.mine_top_left, { justifyContent: "center", }]}
                            >
                                <Text style={[styles.mine_nickname]}>去登录</Text>
                            </TouchableHighlight>
                    }
                </ImageBackground>
                <View style={[styles.mine_content_wrap]}>
                    {
                        lineData.map((item,index)=>{
                            return <Line item={item} index={index} navigation={this.props.navigation} key={index}></Line>
                        })
                    }
                </View>
            </View>

        );
    }
}

class Line extends Component {
    render(){
        const {item,index,navigation}=this.props;
        //console.log(this.props)
        return(
            <TouchableHighlight style={[styles.mine_content_line,{borderBottomWidth:index==lineData.length-1?0:1,}]} onPress={()=>navigation.push(item.route,{})} underlayColor='white'>
                <View style={styles.mine_content_line_wrap}>
                    <Text style={styles.mine_content_line_text}>{item.name}</Text>
                    <Text style={[styles.iconStyle, styles.mine_content_line_icon]}> {'\ue64c'}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}