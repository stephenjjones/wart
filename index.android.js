/**
 * Weather Alerts Real Time App
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  ListView,
  Text,
  TextInput,
  View,
  Navigator,
  TouchableHighlight,
  Picker,
  Image,
  Switch,
} from 'react-native';

var ToolbarAndroid = require('ToolbarAndroid');

import { states, alertTypes, activeAlerts } from './data';
import Main from './js/Main';
import Settings from './js/Settings';
import AlertDetail from './js/AlertDetail';


class WeatherAlertsRealTime extends Component {
  renderScene(route, navigator) {
    if(route.name == 'Main') {
      return <Main navigator={navigator} />
    }
    if(route.name == 'Settings') {
      return <Settings navigator={navigator} />
    }
    if(route.name == 'AlertDetail') {
      return <AlertDetail navigator={navigator} {...route.passProps} />
    }
  }

  render() {
    return (
      <Navigator
        style={{ flex: 1 }}
        initialRoute={{ name: 'Main' }}
        renderScene={ this.renderScene } />
    );
  }
}

AppRegistry.registerComponent('WeatherAlertsRealTime', () => WeatherAlertsRealTime);
