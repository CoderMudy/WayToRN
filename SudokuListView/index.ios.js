/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,//不透明度
  AlertIOS
} from 'react-native';

var Dimensions = require('Dimensions');
var screenWith = Dimensions.get('window').width;

//导入JSON数据
var shareData = require('./shareData.json');

//一些常量设置
var cols = 3;
var cellWH = 100;
var vMargin = (screenWith - cols * cellWH)/(cols + 1);
var hMargin = 25;

var SudokuListView = React.createClass({
  //设置默认值，固定值
  getDefaultProps(){
    return{

    }
  },

  //设置一些初始值 可以变化
  getInitialState(){
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
    return{
      dataSource:ds.cloneWithRows(shareData.data)
    }
  },
  render(){
    return(
        <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            contentContainerStyle={styles.listViewStyle}
        />
    );
  },

  //cell
  renderRow(rowData){
    return(
        <TouchableOpacity>
          <View style={styles.innerViewStyle}>
            <Image source={{uri: rowData.icon}} style={styles.iconStyle}/>
            <Text>{rowData.title}</Text>
          </View>
        </TouchableOpacity>
    );
  }
});

/*
export default class SudokuListView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}
*/
const styles = StyleSheet.create({
  listViewStyle:{
    //改变主轴的方向
    flexDirection:'row',
    //多行显示
    flexWrap:'wrap'
  },
  iconStyle:{
	  width:80,
    height:80
  },
  innerViewStyle:{
    width:cellWH,
    height:cellWH,
    marginTop:hMargin,
    marginLeft:vMargin,
    alignItems:'center'
  }
});

AppRegistry.registerComponent('SudokuListView', () => SudokuListView);