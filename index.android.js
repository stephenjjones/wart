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
  BackAndroid,
} from 'react-native';

var ToolbarAndroid = require('ToolbarAndroid');

import { states, alertTypes, activeAlerts } from './data';
import Main from './js/Main';
import Settings from './js/Settings';
import AlertDetail from './js/AlertDetail';


class WeatherAlertsRealTime extends Component {
  constructor(props) {
    super(props);
    this.handleBackButton = this.handleBackButton.bind(this);
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    const {navigator} = this.refs;

    if (navigator.getCurrentRoutes().length === 1 ) {
      return false;
    }
    navigator.pop();
    return true;
  }

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
        ref="navigator"
        style={{ flex: 1 }}
        initialRoute={{ name: 'Main' }}
        renderScene={ this.renderScene } />
    );
  }
}

AppRegistry.registerComponent('WeatherAlertsRealTime', () => WeatherAlertsRealTime);
