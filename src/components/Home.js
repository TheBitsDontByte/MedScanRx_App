import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from 'react-redux';

import LogoutButton from "./LogoutButton";
import NavigationButtons from "./NavigationButtons";
import MedicineAlertList from "./MedicineAlertList";
import { clearValues } from "../actions";

import { Card } from "./common";

class Home extends Component {
  onSettingsPress() {
    Actions.settings();
  }

  onMedicinesPress() {
    Actions.medicines();
  }

  onAlertsPress() {
    Actions.alerts();
  }

  render() {
    const { containerStyle, subHeaderStyle } = styles;
    console.log("Render here");

    return (
      <View style={containerStyle}>
        <NavigationButtons  
          onSettingsPress={this.onSettingsPress}
          onMedicinesPress={this.onMedicinesPress.bind(this)}
          onAlertsPress={this.onAlertsPress}
        />
        <Text style={subHeaderStyle}>Upcoming Alerts</Text>
        <MedicineAlertList />
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

export default connect(null, { clearValues })(Home);
