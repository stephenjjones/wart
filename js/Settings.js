import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Picker,
  Switch,
  AsyncStorage,
} from 'react-native';

import HeaderBar from './HeaderBar';
import { states, alertTypes } from '../data';

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.loadSettings = this.loadSettings.bind(this);
    this.saveData = this.saveData.bind(this);
    this.saveAlertData = this.saveAlertData.bind(this);
    this.state = {
      countyCode: '',
      stateCode: '',
      activeAlertTypes: {},
    };
  }

  componentDidMount() {
    this.loadSettings();
  }

  loadSettings() {
    AsyncStorage.getItem("countyCode").then((value) => {
      this.setState({"countyCode": value});
    }).done();
    AsyncStorage.getItem("stateCode").then((value) => {
      this.setState({"stateCode": value});
    }).done();
    AsyncStorage.getItem("activeAlertTypes").then((value) => {
      if (value) {
        this.setState({"activeAlertTypes": JSON.parse(value)});
      }
    }).done();
  }

  renderAlertTypeItem(alertType) {
    let isActive = false;
    if ((alertType.code in this.state.activeAlertTypes)) {
      isActive = true;
    }

    return (
      <View key={alertType.code}>
        <Text>{alertType.name}</Text>
        <Switch value={isActive} onValueChange={(value) => this.saveAlertData(alertType.code, value)} />
      </View>
    );
  }

  saveData(key, value) {
    this.setState({[key]: value});
    AsyncStorage.setItem(key, value).done();
  }

  saveAlertData(alertType, value) {
    let activeAlerts = this.state['activeAlertTypes'];
    if (value) {
      activeAlerts[alertType] = true;
    } else {
      delete activeAlerts[alertType];
    }
    this.setState({'activeAlertTypes': activeAlerts});
    AsyncStorage.setItem('activeAlertTypes', JSON.stringify(activeAlerts)).done();
  }

  render() {
    return (
      <View>
        <HeaderBar navigator={this.props.navigator} backButton={true} />
        <View style={styles.container}>
          <Text style={styles.pageTitle}>
            settings
          </Text>
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>
              State
            </Text>
            <Picker
              style={styles.settingPicker}
              selectedValue={this.state.stateCode}
              onValueChange={(stateCode) => this.saveData('stateCode', stateCode)}>
              {states.map((item, index) => <Picker.Item key={item} label={item} value={item} /> )}
            </Picker>
          </View>
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>
              County
            </Text>
            <TextInput
              style={styles.settingTextInput}
              onChangeText={(countyCode) => this.saveData('countyCode', countyCode)}
              value={this.state.countyCode}
              multiline={false}
              placeholder="Enter county code"
              autoCorrect={false}
            />
          </View>
          <View>
            <Text>
              Alert Types
            </Text>
            <View style={styles.alertTypesList}>
              {alertTypes.map((item, index) => this.renderAlertTypeItem(item) )}
            </View>
          </View>
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
  pageTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  settingRow: {
    flexDirection: 'row',
  },
  alertTypesList: {
    flexDirection: 'column',
  },
  settingLabel: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    width: 100,
    height: 40,
  },
  settingTextInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
  },
  settingSwitch: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
  },
  settingPicker: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
  },
});
