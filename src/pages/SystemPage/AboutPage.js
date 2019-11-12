/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-14 18:04:33
 * @LastEditTime: 2019-10-23 15:31:00
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    DeviceEventEmitter,
    View,
    Image
} from 'react-native';
import {styles} from '../MinePage/style';
import {greyBG} from '../../assets/css/common';
const lineData=[
    {
        name:"用户协议",
        route:'UserAgreement'
    },
    {
        name:"联系我们",
        route:''
    }
]
export default class AboutPage extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    componentDidMount() {
        
    }
    
    render() {
        return (
            <View style={css.container}>
                <View style={css.appInfo}>
                    <Image style={css.ic_launcher} source={require('../../assets/images/homePageSwiper/4.jpg')}></Image>
                    <View style={css.appInfoText}>
                        <Text style={css.appName}>周末看展</Text>
                        <Text >Android版 版本号:V1.0(最新版)</Text>
                    </View>
                </View>
                <Text style={css.appDesc}>周末看展APP可以为您的周末生活打开一扇通往各种美好去出的通道，让您不再宅在家里，可以去看各种展览以此来陶冶情操、培养兴趣以及锻炼身体等。</Text>
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

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: greyBG,
        alignItems:"center",
        paddingTop:20,
        
    },
    appInfo:{
        width:'100%',
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    ic_launcher:{
        width:50,
        height:50,
        marginRight:10
    },
    appInfoText:{
    },
    appName:{
        fontSize:24,
        color:"#666"
    },
    appDesc:{
        fontSize:16,
        marginTop:20,
        lineHeight:22,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:20
    }
    
});
