/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import messaging from '@react-native-firebase/messaging';
import {onRemoteMessage} from './src/utils';

if (Platform.OS !== 'ios') {
  //   messaging().setBackgroundMessageHandler(onRemoteMessage);
}
AppRegistry.registerComponent(appName, () => App);
