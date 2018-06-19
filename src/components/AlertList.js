import React, { Component } from "react";
import { ListView, Text } from "react-native";
import { connect } from "react-redux";
import _ from "lodash";

//Keep as alerts or get medicines ? 
import { getAllUpcomingAlerts } from "../actions/AlertsActions";
import AlertListDetail from "./AlertListDetail";
import LoadingAsync from "./LoadingAsync";

class AlertList extends Component {
  componentWillMount() {
    this.props.getAllUpcomingAlerts(100000);
    this.createDataSource(this.props.allAlerts);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps.allAlerts);
  }

  createDataSource(allAlerts) {
    if (!allAlerts) return;

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2  
    });
    this.dataSource = ds.cloneWithRows(allAlerts); 
  }

  renderRow(alert) {
    return <AlertListDetail alert={alert} />;     
  }

  render() {
    return this.props.allAlerts  
      ? <ListView    
        enableEmptySections   
        dataSource={this.dataSource} 
        renderRow={this.renderRow}
      />
      : <LoadingAsync />
    ; 
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    allAlerts: state.alerts.allUpcomingAlerts
  };
};

export default connect(mapStateToProps, { getAllUpcomingAlerts })(AlertList);
