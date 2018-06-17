import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import _ from "lodash";
import { connect } from "react-redux";

import { Card, CardItem } from "./common";
import { getMedicine } from "../actions/medicinesActions";
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
    console.log(this.props,"Props in med details");
    this.props.getMedicine(this.props.medicineId);
  }

  renderAlerts() {
    return _.map(alerts, alert => {
      console.log(alert);
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
    if (!this.props.medicineDetail)
      return <LoadingAsync />;
    const {
      medicineName,
      description,
      dosage,
      specialInstructions
    } = this.props.medicineDetail;
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
            <Text style={titleStyle}>{medicineName}'s Details</Text>
          </CardItem>
          <CardItem style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
            <View style={doseViewStyle}>
              <Text>Description: {description}</Text>
              <Text>Dose: {dosage} </Text>
              <Text>Doses Taken: ???</Text>
              <Text>Doses Remaining: ??</Text>
              <Text>Prescribed by: Doctor</Text>
              <Text>Taking for: ???</Text>
              <Text>Special Instructions: {specialInstructions} </Text>
              <Text>Other stuff or same as other places ? </Text>
              <Text>Other stuff or same as other places ? </Text>
            </View>
          </CardItem>
        </Card>
        <Text style={alertTextStyle}>Upcoming Alerts for {medicineName}</Text>
        <ScrollView>{this.renderAlerts()}</ScrollView>
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
    medicineDetail: state.medicines.medicineDetail 
  };
};

export default connect(mapStateToProps, { getMedicine })(MedicineDetail);
