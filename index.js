import { AppRegistry } from 'react-native'; //导入AppRegistry 这个类
import App from './App';//导入APP页面，也就是app.js这个类

AppRegistry.registerComponent('rn_demo', () => App);//注册app页面，其中‘rn_demo’这个名字要与原生代码那边配置一致
