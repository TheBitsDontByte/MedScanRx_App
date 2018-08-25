import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";

import MedicineList from "./MedicineList";


class Medicines extends Component {
  state = { showAll: true };


  render() {
    const { containerStyle,  } = styles;
    return (
      <View style={containerStyle}>
        {/* <MedicinesNavigationButtons
          onUpcomingAlertsPress={() => this.setState({ showAll: false })}
          onAllMedicinesPress={() => this.setState({ showAll: true })}
        /> */}
        <MedicineList /> 
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

export default Medicines;
