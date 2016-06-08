import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import HeaderBar from './HeaderBar';

export default class AlertDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: ''
    };
  }

  componentDidMount() {
    const alertId = 'AK1256019731B4.SpecialWeatherStatement.125601A3CF00AK.AJKSPSAJK.7a1e1aeff40544aea786b32b4da447c9';
    fetch(`http://alerts.weather.gov/cap/wwacapget.php?x=${alertId}`)
    .then((response) => response.text())
    .then((responseText) => {
      this.setState({alert: responseText});
    })
    .catch((error) => {
      console.warn(error);
    });
  }

  render() {
    return (
      <View>
        <HeaderBar navigator={this.props.navigator} backButton={true} />
        <View style={styles.container}>
          <Text>
            Alert Detail
            {this.state.alert}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
