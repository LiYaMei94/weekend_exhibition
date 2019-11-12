/*
 * @Author: your name
 * @Date: 2019-10-22 15:40:17
 * @LastEditTime: 2019-10-25 17:01:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /c:\Users\123\Desktop\react_native_appc:\Users\123\Desktop\weekend_exhibition\src\pages\ExhibitionList\html.js
 */


import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView, View, TouchableHighlight, Dimensions, Animated, DeviceEventEmitter, PanResponder,NativeModules } from 'react-native';
import { styles } from './style';
const ExhibitionArr = [{
    title:'穆夏：新艺术运动先锋',
    date:'2019年10月19日 - 12月8日',
    place:'北京市西城区西长安街2号 国家大剧院',
    img:[require('../../assets/images/homePageSwiper/p79444168-2.jpg'),
    require('../../assets/images/homePageSwiper/p79444168-3.jpg'),
    require('../../assets/images/homePageSwiper/p79444168-4.jpg'),
    require('../../assets/images/homePageSwiper/p79444168-5.jpg')]

}];
import ExhibitionItem from '../../components/exhibitionItem';
export default class ExhibitionList extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('title', '')+'展览',
    })
    constructor(props) {
        super(props);
        this.state={
           
        }
    }
    componentDidMount() {
        
    }
    
    render() {
        
        return (
            <View style={styles.container}>
                {
                        ExhibitionArr.map((item, index) => {
                            return <ExhibitionItem
                                    isList={true} 
                                    navigation={this.props.navigation} 
                                    key={index} 
                                    index={index} 
                                    item={item} 
                                    lenght={ExhibitionArr.length - 1}></ExhibitionItem>
                        })
                    }
            </View>

        );
    }
}
