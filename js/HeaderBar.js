import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';


export default class HeaderBar extends Component {
  constructor(props) {
    super(props);
    this.renderSettingsButton = this.renderSettingsButton.bind(this);
    this.renderBackButton = this.renderBackButton.bind(this);
  }
  render() {
    return (
      <View style={styles.header}>
        {this.props.backButton && this.renderBackButton()}
        <Text style={styles.logo}>WART</Text>
        {this.props.settingsButton && this.renderSettingsButton()}
      </View>
    );
  }

  renderSettingsButton() {
    return (
      <View style={styles.settingsButton}>
        <TouchableHighlight onPress={ () => this._navigate() }>
          <Image source={require('../img/hamburger.png')} />
        </TouchableHighlight>
      </View>
    );
  }

  renderBackButton() {
    return (
      <View style={styles.backButton}>
        <TouchableHighlight onPress={ () => this.props.navigator.pop() }>
          <Image source={require('../img/back.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={ () => this.props.navigator.pop() }>
          <Text>back</Text>
        </TouchableHighlight>
      </View>
    );
  }


  _navigate() {
    this.props.navigator.push({
      name: 'Settings',
    })
  }
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgb(243,66,53)',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    flexDirection: 'row',
    position: 'absolute',
    top: 15,
    left: 5,
  },
  settingsButton: {
    position: 'absolute',
    top: 15,
    right: 5,
  },
  logo: {
    fontSize: 20,
    color: 'white',
  },
});
