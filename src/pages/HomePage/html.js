/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 17:29:20
 * @LastEditTime: 2019-10-22 18:01:13
 * @LastEditors: Please set LastEditors
 */

import React, { Component } from 'react';
import {
    Text,
    Image,
    ScrollView,
    View,
    TouchableHighlight,
    Dimensions,
    Animated,
    DeviceEventEmitter,
    PanResponder,
    FlatList,
    NativeModules
} from 'react-native';
import { styles } from './style';
import Swiper from '../../components/swiper';
import { ScreenWidth, ScreenHeight,headerHeight,headerPaddingTop } from '../../assets/css/common';
import ExhibitionItem from '../../components/exhibitionItem';
const data = [require('../../assets/images/homePageSwiper/1.jpg'),
require('../../assets/images/homePageSwiper/2.jpg'),
require('../../assets/images/homePageSwiper/3.jpg'),
require('../../assets/images/homePageSwiper/4.jpg'),
require('../../assets/images/homePageSwiper/5.jpg')
];
const tab = [
    {
        name: '博物馆',
        icon: '\ue61c',
        router: 'ExhibitionList'
    },
    {
        name: '美术馆',
        icon: '\ue6ac',
        router: 'ExhibitionList'
    },
    {
        name: '公园',
        icon: '\ue602',
        router: 'ExhibitionList'
    }
];
const ExhibitionArr = [0, 1, 2, 3, 4];
export default class HomePage extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.getParam('title', '')}`,
        headerStyle:{
            height: `${navigation.getParam('title', '')}`==''?0:headerHeight,
            paddingTop:  `${navigation.getParam('title', '')}`==''?0:headerPaddingTop,
            elevation: 0,  // android去除阴影
            borderBottomWidth:1,
            borderBottomColor:'#F1EEE9',
            //backgroundColor:poem_detail_bg_color
        }
    })
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {

    }
    swiperItemRender(item, index) {
        return (
            <View style={styles.swiper_item}>
                <Image source={item} resizeMode='cover' style={styles.swiper_img}></Image>
            </View>
        )
    }
    render() {
        const { setParams } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    onScroll={(e)=>{
                        let {x, y} = e.nativeEvent.contentOffset;
                        if(y>300){
                            setParams({ title: '展讯'});
                        }else{
                            setParams({ title: ''});
                        }
                    }}
                >
                    <Swiper style={{ width: ScreenWidth, height: 200 }}
                        dataSource={data}
                        width={ScreenWidth}
                        height={200}
                        renderRow={this.swiperItemRender.bind(this)}
                        //onPress={this.onPressRow} 
                        ratio={1} //每一个的的宽度 
                        loop={true}
                        ref={ref => this.Swiper = ref}
                        onDidChange={(obj, index) => {

                        }}
                    />
                    <View style={[styles.content_item, { flexDirection: "row", height:80}]}>
                        {
                            tab.map((item, index) => {
                                return (
                                    <TouchableHighlight
                                        underlayColor='transparent'
                                        onPress={() => this.props.navigation.push(item.router)}
                                        style={styles.tabItem}
                                        key={index}
                                    >
                                        <View style={{ justifyContent: "center", alignItems: "center", width: '100%' }}>
                                            <Text style={styles.tabName}>{item.name}</Text>
                                            <Text style={[styles.tabIcon]}>{item.icon}</Text>
                                        </View>
                                    </TouchableHighlight>
                                )
                            })
                        }
                    </View>
                    {
                        ExhibitionArr.map((item, index) => {
                            return <ExhibitionItem key={index} index={index} item={item} lenght={ExhibitionArr.length - 1}></ExhibitionItem>
                        })
                    }
                </ScrollView>
            </View>


        );
    }
}
