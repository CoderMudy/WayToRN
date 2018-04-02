/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * 外边狗子又开始叫唤了，还有，有些人很喜欢看笑话
 *
 * 在RN中，scrollview组件可以使用stickyHeaderIndices轻松实现sticky效果，而使用listview时，stickyHeaderIndices则不生效
 *
 * 在ListView中要实现sticky，需要使用cloneWithRowsAndSections方法，将dataBlob(object),sectionIDs(array),rowIDs(array)三个值传进去
 *
 * dataBlob包含listView所需的所有数据(section header和rows)，在ListView渲染数据时，使用getSectionData和getRowData，来渲染每一行数据，
 * dataBlob的key值包含sectionID+rowID
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity
} from 'react-native';

var Cars = require("./Car.json")

var  CeilingListView = React.createClass({
  getInitialState(){
    var getSectionData = (dataBlob,sectionID) => {
      return dataBlob[sectionID]
    }

    var getRowData = (dataBlob,sectionID,rowID) => {
      return dataBlob[sectionID + ":" + rowID];//取到每一行的数据
    }

    return {
      dataSource: new ListView.dataSource({
        getSectionData: getSectionData,//获取组中的数据
        getRowData:getRowData,//获取行中的数据
        rowHasChanged:(r1,r2)=> r1 !== r2 ,
        sectionHeaderHasChanged:(s1,s2) => s1 !== s2,

      })
    }
  },

  render (){
    return (
        <ListView

        />
    );
  },
  //复杂的操作
  componentDidMount(){
    //调用json数据
    this.loadDataFromJson();
  },

  loadDataFromJson(){
    //拿到json数据
    var jsonData = Cars.data
    //对象类型的dataBlob,rowIDs,sectionIDs
    var dataBlob = {},sectionIDs = [],rowIDs = [],cars = []

    for(var i = 0;i<jsonData.length;i++){
      //把组号放到sectionIDs中
      sectionIDs.push(i);

      //组中的内容放进dataBlob对象中
      dataBlob[i] = jsonData[i].title;

      //取出每一组中所有的车的信息
      cars = jsonData[i].cars;
      rowIDs[i] = [];

      //
      for(var j = 0;j<cars.length;j++){
        rowIDs[i].push(j);
        dataBlob[i + ":" + j] = cars[j]
      }
    }
  //更新状态
    this.setState({
      dataSource:this.state.dataSource.cloneWithRowsAndSections(dataBlob,sectionIDs,rowIDs)
    });



  }


});

const styles = StyleSheet.create({



});

AppRegistry.registerComponent('CeilingListView', () => CeilingListView);
