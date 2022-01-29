import {AppRegistry} from 'react-native';
import AppTabNavigator from './AppTabNavigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppTabNavigator);
