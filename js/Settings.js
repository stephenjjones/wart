import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Picker,
  Switch,
} from 'react-native';

import HeaderBar from './HeaderBar';
import { states, alertTypes } from '../data';

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countyCode: '',
      stateCode: 'GA',
      'BZW': true,
      'CFA': false,
    };
  }

  renderAlertTypeItem(alertType) {
    return (
      <View key={alertType.code}>
        <Text>{alertType.name}</Text>
        <Switch onValueChange={(value) => this.setState({[alertType.code]: value})} value={this.state[alertType.code]} />
      </View>
    );
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
              onValueChange={(stateCode) => this.setState({stateCode: stateCode})}>
              {states.map((item, index) => <Picker.Item key={item} label={item} value={item} /> )}
            </Picker>
          </View>
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>
              County
            </Text>
            <TextInput
              style={styles.settingTextInput}
              onChangeText={(countyCode) => this.setState({countyCode: countyCode})}
              value={this.state.county}
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
