import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from 'react-redux';

import { getAllUpcomingAlerts } from "../actions/AlertsActions";

import AlertList from "./AlertList";
import AlertsNavigationButtons from "./AlertsNavigationButtons";
import MedicineAlertList from './MedicineAlertList';

class Alerts extends Component {
  state = { showAll: true };

  render() {
    const { containerStyle, subHeaderStyle } = styles;
    const { showAll } = this.state;
    return (
      <View style={containerStyle}> 
        <AlertList /> 
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: "#c1e8ff"
  },
  subHeaderStyle: {
    borderBottomColor: "steelblue",
    borderBottomWidth: 1,
    color: "steelblue",
    paddingTop: 10,
    paddingBottom: 5,
    fontSize: 20,
    textAlign: "center"
  }
};

export default connect(null, { getAllUpcomingAlerts })(Alerts);
