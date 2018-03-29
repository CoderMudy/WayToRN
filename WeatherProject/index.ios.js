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
  TextInput
} from 'react-native';

export default class WeatherProject extends Component {
  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {
        zip:"",
      };
    }

	render() {
		return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            你输入的是{this.state.zip}
          </Text>
          <TextInput
              style={styles.input}
              placeholder="请输入邮编"
              onSubmitEditing={(event)=>this.setState({zip:"return" + event.nativeEvent.text})}
              onChangeText={(zip)=>this.setState({zip})}
          />

        </View>
		);
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input:{
      fontSize:20,
      borderWidth:2,
      height:40
  }

});

AppRegistry.registerComponent('WeatherProject', () => WeatherProject);
