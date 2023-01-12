/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { backgroundMessage, foregroundMessage, requestUserPermission } from './lib/utils/helpers/firebaseMessaging';

backgroundMessage();
foregroundMessage();
requestUserPermission();
AppRegistry.registerComponent(appName, () => App);
