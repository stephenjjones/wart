import React, { Component } from 'react';
import {
  Text,
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
      <TouchableHighlight onPress={ () => this.props.onNavigate('alertId') }>
        <Text>{rowData.headline}</Text>
      </TouchableHighlight>
    );
  }
}
