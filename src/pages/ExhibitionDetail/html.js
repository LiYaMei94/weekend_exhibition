/*
 * @Author: your name
 * @Date: 2019-10-23 14:22:29
 * @LastEditTime: 2019-10-25 16:53:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /c:\Users\123\Desktop\react_native_appc:\Users\123\Desktop\weekend_exhibition\src\pages\MyAttention\html.js
 */



import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    ScrollView,
    View,
    TouchableHighlight,
    Animated,
    DeviceEventEmitter,
    FlatList,
    Image,
    NativeModules
} from 'react-native';
import { styles } from './style';
import Swiper from '../../components/swiper';
import { ScreenWidth, headerHeight, headerPaddingTop, headerRightMarginRight } from '../../assets/css/common';
import Loading from '../../components/loading';
const data = [require('../../assets/images/homePageSwiper/p79444168-2.jpg'),
require('../../assets/images/homePageSwiper/p79444168-3.jpg'),
require('../../assets/images/homePageSwiper/p79444168-4.jpg'),
require('../../assets/images/homePageSwiper/p79444168-5.jpg')
];

class HeaderComponent extends React.Component{
    render(){
        const {title,isLeft,navigation,isLoad}=this.props;
        console.log(isLoad)
        /*if(isLoad){
            return null;
        }*/
        return(
            <TouchableHighlight
                onPress={() => {
                    isLeft?navigation.goBack():navigation.state.params.navigatePress()
                }}
                underlayColor='transparent'
                style={[styles.headerRightButtonBox,{
                    marginLeft:isLeft?headerRightMarginRight:0,
                    marginRight:!isLeft?headerRightMarginRight:0,
                    backgroundColor:title==''?"rgba(0,0,0,0.5)":'#fff'}]}
            >
                <Text style={[styles.headerRightButton,{color:title==''?'#fff':'#666'}]} >{isLeft?'\ue761':'\ue628'}</Text>
            </TouchableHighlight>
        )
    }
}
export default class ExhibitionDetail extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.getParam('title', '')}`,
        headerStyle: {
            height: headerHeight,
            paddingTop:headerPaddingTop,
            elevation: 0,  // android去除阴影
            borderBottomWidth:`${navigation.getParam('title', '')}`==''?0:1,
            borderBottomColor:'#F1EEE9'
        },
        headerLeft:<HeaderComponent isLoad={`${navigation.getParam('isLoad', true)}`} navigation={navigation} title={`${navigation.getParam('title', '')}`} isLeft={true}></HeaderComponent>,
        headerTransparent:`${navigation.getParam('title', '')}`==''?true:false,
        headerRight: <HeaderComponent isLoad={`${navigation.getParam('isLoad', true)}`} navigation={navigation} title={`${navigation.getParam('title', '')}`} isLeft={false}></HeaderComponent>,
        headerTitleStyle: {
            fontWeight: 'normal',
            fontSize: 18
        },
    })
    constructor(props) {
        super(props);
        this.state = {
            isLoad:true
        }
    }
    componentDidMount() {
        this.props.navigation.setParams({ navigatePress: this.setAttention.bind(this) });
        let that=this;
        const { setParams } = this.props.navigation;
        this.timer = setTimeout(() => {
            setParams({ isLoad: false });
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
    
    /**
     * 关注操作
     */
    setAttention(){
        
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
        const {isLoad}=this.state;
        /*if(isLoad){
            return <Loading></Loading>
        }*/
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                onScroll={(e) => {
                        let { x, y } = e.nativeEvent.contentOffset;
                        if (y > 300) {
                            setParams({ title: '展讯详情' });
                        } else {
                            setParams({ title: '' });
                        }
                    }}>
                <View style={styles.container}>
                    <Swiper style={{ width: ScreenWidth, height: 300 }}
                        dataSource={data}
                        width={ScreenWidth}
                        height={300}
                        renderRow={this.swiperItemRender.bind(this)}
                        //onPress={this.onPressRow}
                        ratio={1} //每一个的的宽度
                        loop={true}
                        ref={ref => this.Swiper = ref}
                        onDidChange={(obj, index) => {

                        }}
                    />
                    <View style={styles.ExhibitionDetailContent}>
                        <View style={{ backgroundColor: '#fff' }}>
                            <Text style={styles.exhibition_desc}>穆夏：新艺术运动先锋</Text>
                            <View style={{ borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 15, paddingLeft: headerRightMarginRight, paddingRight: headerRightMarginRight, }}>
                                <View style={styles.exhibitionInfoLine}>
                                    <Text style={styles.lineIcon}>{'\ue60f'}</Text>
                                    <Text style={styles.lineText}>展览时间</Text>
                                </View>
                                <Text style={[styles.exhibition_info, { marginBottom: 10 }]}>2019年10月19日 - 12月8日</Text>
                                <View style={styles.exhibitionInfoLine}>
                                    <Text style={styles.lineIcon}>{'\ue60b'}</Text>
                                    <Text style={styles.lineText}>票务</Text>
                                </View>
                                <Text style={styles.exhibition_info}>全票：60元</Text>
                            </View>
                            <TouchableHighlight
                                style={{ height: 50, justifyContent: "center", paddingLeft: headerRightMarginRight, paddingRight: headerRightMarginRight, }}
                            >
                                <View style={{ flexDirection: "row", alignItems: "center", height: '100%' }}>
                                    <Text style={[styles.exhibition_info, { paddingLeft: 0 }]}>北京市西城区西长安街2号 国家大剧院</Text>
                                    <Text style={[styles.right_icon]}> {'\ue64c'}</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.xhibitionDetailInfo}>
                            <Text style={styles.describeText}>
                            本次展览聚焦捷克艺术家阿尔丰斯·穆夏（Alphonse Mucha，1860-1939）的艺术生涯，共展出244件展品，包括他创作的海报、装饰板、书籍插画、油画作品，同时展出的还有部分新艺术风格的家具、服饰、珠宝、玻璃器皿等。
                            </Text>
                            <Text style={[styles.describeText,{marginTop:20}]}>
                            展览的核心是穆夏在19世纪末至20世纪初创作的一批代表性作品，包括戏剧海报、商业广告、插画和装饰板等，用优雅的曲线描绘女性波浪形的头发和飘逸的衣服，并配以几何图案和动植物图案的装饰。同时展出的还有穆夏出版的画集、记录其工作环境的银盐照片，以及表达他精神信仰的插图版《主祷文》等。
                            </Text>
                            <Text style={{marginTop:10,fontSize:16}}>【概览】</Text>
                            <View style={styles.overviewLine}>
                                <Image style={styles.describeImg} resizeMode='cover' source={require('../../assets/images/homePageSwiper/p79444168-2.jpg')}></Image>
                                <Text style={[styles.describeText,{color:'#999'}]}>
                                《水果》与《花卉》，1897年
                                </Text>
                            </View>
                            <View style={styles.overviewLine}>
                                <Image style={styles.describeImg} resizeMode='cover' source={require('../../assets/images/homePageSwiper/p79444168-3.jpg')}></Image>
                                <Text style={[styles.describeText,{color:'#999'}]}>
                                《羽毛》杂志年历设计，1898年
                                </Text>
                            </View>
                            <View style={styles.overviewLine}>
                                <Image style={styles.describeImg} resizeMode='cover' source={require('../../assets/images/homePageSwiper/p79444168-4.jpg')}></Image>
                                <Text style={[styles.describeText,{color:'#999'}]}>
                                《装饰资料画集》第40页，1902年
                                </Text>
                            </View>
                            <View style={styles.overviewLine}>
                                <Image style={styles.describeImg} resizeMode='cover' source={require('../../assets/images/homePageSwiper/p79444168-5.jpg')}></Image>
                                <Text style={[styles.describeText,{color:'#999'}]}>
                                《雏菊中的姑娘》，约1900年
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

        );
    }
}
