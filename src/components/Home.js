import React, { Component } from "react";
import { View, Text } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

import NavigationButtons from "./NavigationButtons";
import MedicineAlertList from "./MedicineAlertList";
import { clearValues, getAllUpcomingAlerts } from "../actions";

class Home extends Component {
  onMedicinesPress() {
    Actions.medicines();
  }

  onAlertsPress() {
    Actions.alerts();
  }

  render() {
    const { containerStyle, subHeaderStyle } = styles;

    return (
      <View style={containerStyle}>
        <NavigationButtons
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

export default connect(
  null,
  { clearValues, getAllUpcomingAlerts }
)(Home);
