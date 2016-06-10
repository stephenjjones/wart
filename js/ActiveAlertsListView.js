import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  ListView,
  TouchableHighlight,
} from 'react-native';

import { activeAlerts } from '../data';

export default class ActiveAlertsListView extends Component {
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
      <TouchableHighlight style={styles.row} onPress={ () => this.props.onNavigate(rowData.identifier) }>
        <Text>{rowData.headline}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 10,
    marginTop: 10,
  },
});
