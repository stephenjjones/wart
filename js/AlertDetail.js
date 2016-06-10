import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import HeaderBar from './HeaderBar';
var DOMParser = require('xmldom').DOMParser;

export default class AlertDetail extends Component {
  constructor(props) {
    super(props);
    this.getNodeValue = this.getNodeValue.bind(this);
    this.state = {
      alertData: undefined
    };
  }

  componentDidMount() {
    //const alertId = 'KY12560200A6F8.AirQualityAlert.1256020F3B00KY.LMKAQALMK.8446fa5ae5b9a5dca1922b99a1208616';
    const alertId = this.props.alertId;
    fetch(`http://alerts.weather.gov/cap/wwacapget.php?x=${alertId}`)
    .then((response) => response.text())
    .then((responseText) => {
    var doc = new DOMParser().parseFromString(responseText, 'text/xml');
      this.setState({alertData: doc});
    })
    .catch((error) => {
      console.warn(error);
    });
  }

  getNodeValue(doc, tagName) {
    if (!doc) { return '' };

    const node = doc.getElementsByTagName(tagName)[0];
    const value = node ? node.textContent : '';
    return value;
  }

  render() {
    const alertData = this.state.alertData;

    const identifier = this.getNodeValue(alertData, "identifier");
    const sent = this.getNodeValue(alertData, "sent");
    const effective = this.getNodeValue(alertData, "effective");
    console.log('effective: ' + effective);
    const expires = this.getNodeValue(alertData, "expires");
    const event = this.getNodeValue(alertData, "event");
    const headline = this.getNodeValue(alertData, "headline");
    const description = this.getNodeValue(alertData, "description");
    const instructions = this.getNodeValue(alertData, "instruction");
    const targetArea = this.getNodeValue(alertData, "areaDesc");

    return (
      <ScrollView>
        <HeaderBar navigator={this.props.navigator} backButton={true} />
        <View style={styles.container}>
          <View style={styles.row}>
            <Text style={styles.label}>Message: </Text><Text style={styles.value}>{identifier}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Sent: </Text><Text style={styles.value}>{sent}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Effective: </Text><Text style={styles.value}>{effective}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Expires: </Text><Text style={styles.value}>{expires}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Event: </Text><Text style={styles.value}>{event}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Alert: </Text><Text style={styles.value}>{description}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Instructions: </Text><Text style={styles.value}>{instructions}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Target Area: </Text><Text style={styles.value}>{targetArea}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    paddingLeft: 10,
    paddingRight: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  label: {
    width: 80,
    fontWeight: 'bold',
  },
  value: {
    flexWrap: 'wrap',
  },
});
