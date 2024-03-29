import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

import ActiveAlertsListView from './ActiveAlertsListView';


export default class AlertsList extends Component {
  constructor(props) {
    super(props);
    this._navigate = this._navigate.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <ActiveAlertsListView onNavigate={this._navigate} />
      </View>
    );
  }

  _navigate(property){
    this.props.navigator.push({
      name: 'AlertDetail',
      passProps: {
        alertId: property
      }
    })
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(95, 124, 138)',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
