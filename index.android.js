/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  TextInput,
  View,
  Navigator,
  TouchableHighlight,
  Picker,
  Switch,
} from 'react-native';

import { states, alertTypes } from './data';

const activeAlerts = ['Tornados everywhere', 'Flooding! Run for the Hills!'];

class ActiveAlertsListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
    };
    this.renderRow = this.renderRow.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(activeAlerts),
    });
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      ></ListView>
    );
  }

  renderRow(rowData) {
    return (
      <TouchableHighlight onPress={ () => this.props.onNavigate('alertId') }>
        <Text>{rowData}</Text>
      </TouchableHighlight>
    );
  }
}

class AlertDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={ () => this.props.navigator.pop() }>
          <Text>back</Text>
        </TouchableHighlight>
        <Text style={styles.instructions}>
          Alert Detail
        </Text>
      </View>
    );
  }
}

class AlertsList extends Component {
  constructor(props) {
    super(props);
    this._navigate = this._navigate.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Alert List
        </Text>
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

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>
          WART
        </Text>
        <AlertsList navigator={this.props.navigator}/>
        <TouchableHighlight onPress={ () => this._navigate() }>
          <Text>Settings</Text>
        </TouchableHighlight>
      </View>
    );
  }

  _navigate(){
    this.props.navigator.push({
      name: 'Settings',
    })
  }
}

class Settings extends Component {
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
      <View style={styles.container}>
        <TouchableHighlight onPress={ () => this.props.navigator.pop() }>
          <Text>back</Text>
        </TouchableHighlight>
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
    );
  }
}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'red',
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

AppRegistry.registerComponent('WeatherAlertsRealTime', () => WeatherAlertsRealTime);
