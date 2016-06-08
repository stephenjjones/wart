import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import HeaderBar from './HeaderBar';
import AlertsList from './AlertsList';

export default class Main extends Component {
  render() {
    return (
      <View>
        <HeaderBar navigator={this.props.navigator} settingsButton={true}/>
        <AlertsList navigator={this.props.navigator}/>
      </View>
    );
  }
}

