import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import _ from "lodash";
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';

import { Card, CardItem } from "./common";
import { getPrescriptionWithAlerts } from "../actions/medicinesActions";
import LoadingAsync from './LoadingAsync';

const alerts = [
  "ALL MOCK DATA, JUST FOR DEMO",
  "Tuesday, April 5th @ 3:00 PM",
  "Tuesday, April 5th @ 8:00 PM",
  "Tuesday, April 6th @ 11:00 AM",
  "Tuesday, April 6th @ 3:00 PM",
  "Tuesday, April 6th @ 8:00 PM",
  "Tuesday, April 7th @ 11:00 AM",
  "Tuesday, April 7th @ 3:00 PM",
  "Tuesday, April 7th @ 8:00 PM",
  "Tuesday, April 8th @ 11:00 AM",
  "Tuesday, April 8th @ 3:00 PM",
  "Tuesday, April 8th @ 8:00 PM"
];

class MedicineDetail extends Component {
  componentWillMount() {
    this.props.getPrescriptionWithAlerts(this.props.prescriptionId);
  }

  // componentDidMount () {
  //   BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid()) // Listen for the hardware back button on Android to be pressed
  // }

  // componentWillUnmount () {
  //   BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid()) // Remove listener
  // }

  // backAndroid () {
  //   Actions.reset("main") // Return to home
  //   return true // Needed so BackHandler knows that you are overriding the default action and that it should not close the app
  // }

  renderAlerts(scheduledAlerts) {
    return _.map(scheduledAlerts, alert => {
      return (
        <Card>
          <CardItem>
            <Text key={alert}>{alert}</Text>
          </CardItem>
        </Card>
      );
    });
  }

  render() {
    console.log("In render, props", this.props);
    if (!this.props.prescriptionWithAlerts)
      return <LoadingAsync />; 
    const {
      brandName,
      color,
      dosage,
      warnings,
      scheduledAlerts
    } = this.props.prescriptionWithAlerts;
    const {
      alertTextStyle,
      titleStyle,
      doseViewStyle,
      containerStyle
    } = styles;

    return (
      <View style={containerStyle}>
        <Card>
          <CardItem
            style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
          >
            <Text style={titleStyle}>{brandName}'s Details</Text>
          </CardItem>
          <CardItem style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
            <View style={doseViewStyle}>
              <Text>Description: {color}</Text>
              <Text>Dose: {dosage} </Text>
              <Text>Doses Taken: ???</Text>
              <Text>Doses Remaining: ??</Text>
              <Text>Prescribed by: Doctor</Text>
              <Text>Taking for: ???</Text>
              <Text>Special Instructions: {warnings} </Text>
              <Text>Other stuff or same as other places ? </Text>
              <Text>Other stuff or same as other places ? </Text>
            </View>
          </CardItem>
        </Card>
        <Text style={alertTextStyle}>Upcoming Alerts for {brandName}</Text>
        <ScrollView>{this.renderAlerts(scheduledAlerts)}</ScrollView>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: "#c1e8ff",
    flex: 1
  },
  titleStyle: {
    fontSize: 24,
    color: "steelblue",
    flex: 1,
    textAlign: "center"
  },
  doseViewStyle: {
    flex: 1
  },
  alertTextStyle: {
    borderBottomColor: "steelblue",
    borderBottomWidth: 1,
    color: "steelblue",
    paddingTop: 10,
    paddingBottom: 5,
    fontSize: 20,
    textAlign: "center"
  }
};

const mapStateToProps = (state, ownProps) => {
  console.log("State in mstp", state);
  return {
    prescriptionWithAlerts: state.medicines.prescriptionWithAlerts 
  };
};

export default connect(mapStateToProps, { getPrescriptionWithAlerts })(MedicineDetail);
