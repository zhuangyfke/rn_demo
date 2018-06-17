
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NativeModules,
  DeviceEventEmitter
} from 'react-native';

export default class App extends Component {

  componentWillMount(){
    DeviceEventEmitter.addListener('AndroidToRn', this.androidToRn.bind(this));
  }
  componentWillUnmount() {
    DeviceEventEmitter.removeAllListeners();
}

  render() {

    return (
      <View style={[styles.rootViewStyle]} flexDirection="column">
       <TouchableOpacity style={[styles.touchStyle]} onPress={this.getFinalValue}>
          <Text style={[styles.textButton]}>获取安卓常量</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.touchStyle]} onPress={this.rnToAndroidClick}>
          <Text style={[styles.textButton]}>从RN传数据给原生</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.touchStyle]} onPress={this.rnCallBack}>
          <Text style={[styles.textButton]}>使用callback返回数据给RN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.touchStyle]} onPress={this.promiseToRn}>
          <Text style={[styles.textButton]}>Promise返回数据给RN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.touchStyle]} onPress={this.jumpToMyActivity}>
          <Text style={[styles.textButton]}>跳转至MyActivity</Text>
        </TouchableOpacity>
      </View>
    );
  }

  getFinalValue=()=>{
    console.log(`安卓静态常量:${NativeModules.ExampleReactModule.test}`);
  }

  rnToAndroidClick = () => {
    NativeModules.ExampleReactModule.handleMessage('我来至RN');
  }

  rnCallBack = () => {
    console.log(`rnCallBack start`);
    NativeModules.ExampleReactModule.handleCallback('我来至RN', (msg) => {
      console.log(`安卓回调的数据：${msg}`);
    });
    console.log(`rnCallBack end`);
  }

  promiseToRn = () => {
    console.log(`promiseToRn start`);
    NativeModules.ExampleReactModule.handlePromise('使用Promise').then((msg) => {
      console.log(msg)
    }).catch((error) => {
      console.log(error)
    });
    console.log(`promiseToRn end`);
  }

  androidToRn=(androidMsg)=>{
    console.log(`来至安卓的消息：${androidMsg}`);
  }

  jumpToMyActivity=()=>{
    NativeModules.ExampleReactModule.jumpToMyActivity();
  }

}



const styles = StyleSheet.create({
  rootViewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  touchStyle: {
    width: 180,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff87a0',
    marginTop: 20
  },
  textButton: {
    fontSize: 16

  }

});
