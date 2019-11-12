/*
 * @Author: your name
 * @Date: 2019-10-22 13:38:50
 * @LastEditTime: 2019-10-25 16:44:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /c:\Users\123\Desktop\react_native_appc:\Users\123\Desktop\weekend_exhibition\src\pages\HomePage\html.js
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
    NativeModules,
    Modal
} from 'react-native';
import { styles } from './style';
import Swiper from '../../components/swiper';
import { ScreenWidth, ScreenHeight, headerHeight, headerPaddingTop, } from '../../assets/css/common';
import ExhibitionItem from '../../components/exhibitionItem';
import Loading from '../../components/loading';

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
        router: 'ExhibitionList',
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
const ExhibitionArr = [{
    title:'穆夏：新艺术运动先锋',
    date:'2019年10月19日 - 12月8日',
    place:'北京市西城区西长安街2号 国家大剧院',
    img:[require('../../assets/images/homePageSwiper/p79444168-2.jpg'),
    require('../../assets/images/homePageSwiper/p79444168-3.jpg'),
    require('../../assets/images/homePageSwiper/p79444168-4.jpg'),
    require('../../assets/images/homePageSwiper/p79444168-5.jpg')]

}];
export default class HomePage extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.getParam('title', '')}`,
        headerStyle: {
            height: `${navigation.getParam('title', '')}`==''?0:headerHeight,
            paddingTop:  `${navigation.getParam('title', '')}`==''?0:headerPaddingTop,
            elevation: 0,  // android去除阴影
            borderBottomWidth: 1,
            borderBottomColor: '#F1EEE9',
        },
        headerRight: (
            `${navigation.getParam('title', '')}`==''?null:
            <TouchableHighlight
                onPress={() => navigation.state.params.navigatePress()}
                underlayColor='transparent'
                style={styles.headerRightButtonBox}
            >
                <Text style={styles.headerRightButton} >{'\ue601'}</Text>
            </TouchableHighlight>
        ),
        headerTitleStyle: {
            fontWeight: 'normal',
            fontSize:18
        },
    })
    constructor(props) {
        super(props);
        this.state = {
            isShowDrawer: false,
            isLoad:true
        }

    }
    componentDidMount() {
        this.props.navigation.setParams({ navigatePress: this.setModalVisible.bind(this,true) });
        let that=this;
        this.timer = setTimeout(() => {
            that.setState({
                isLoad:false
            })
        }, 700);
    }
    componentWillUnmount() {
        // 请注意Un"m"ount的m是小写
    
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }
    swiperItemRender(item, index) {
        return (
            <View style={styles.swiper_item}>
                <Image source={item} resizeMode='cover' style={styles.swiper_img}></Image>
            </View>
        )
    }
    setModalVisible(visible) {
        this.setState({ isShowDrawer: visible });
    }


    render() {
        const { setParams } = this.props.navigation;
        const { isShowDrawer,isLoad } = this.state;
        /*if(isLoad){
            return <Loading></Loading>
        }*/
        return (
            <View style={styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    onScroll={(e) => {
                        let { x, y } = e.nativeEvent.contentOffset;
                        if (y > 300) {
                            setParams({ title: '展讯' });
                        } else {
                            setParams({ title: '' });
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
                    <View style={[styles.content_item, { flexDirection: "row", height: 80 }]}>
                        {
                            tab.map((item, index) => {
                                return (
                                    <TouchableHighlight
                                        underlayColor='transparent'
                                        onPress={() => this.props.navigation.push(item.router,{title:item.name})}
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
                            return <ExhibitionItem 
                                    navigation={this.props.navigation} 
                                    key={index} 
                                    index={index} 
                                    item={item} 
                                    lenght={ExhibitionArr.length - 1}></ExhibitionItem>
                        })
                    }
                </ScrollView>
                {/*<Modal
                        animationType="slide"
                        visible={this.state.isShowDrawer}
                        //transparent={true}
                        //presentationStyle='overFullScreen'
                        onRequestClose={() => {
                            this.setModalVisible(!this.state.isShowDrawer);
                        }}
                        
                    >
                        <View style={{ marginTop: 22,width:200,height:300,backgroundColor:"rgab(0,0,0,0.5)" }}>
                            <View>
                                <Text>Hello World!</Text>

                                <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(!this.state.isShowDrawer);
                                    }}
                                >
                                    <Text>Hide Modal</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>*/}
            </View>


        );
    }
}
/*

*/