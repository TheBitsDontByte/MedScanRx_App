import React, { Component } from "react";
import { View, Text, ScrollView, TouchableWithoutFeedback } from "react-native";
import _ from "lodash";
import moment from "moment";
import { Actions } from "react-native-router-flux";

import { Card, CardItem } from "./common";

class AlertListDetail extends React.Component {
  onSpecificAlertPress() {
    Actions.medicineDetail({ prescriptionId: this.props.alert.prescriptionId });
  }

  render() {
    console.log("Moment test", moment().add(1, "hour"));
    const {
      upcomingAlertTitleStyle,
      timerViewStyle,
      titleStyle,
      timerTextStyle,
      doseViewStyle
    } = styles;
    const { brandName, nextAlert } = this.props.alert;

    return (
      <TouchableWithoutFeedback onPress={this.onSpecificAlertPress.bind(this)}>
        <View>
          <Card>
            <CardItem
              style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
            >
              {moment(nextAlert).isBefore(moment().add(59, "m")) ? (
                <Text style={upcomingAlertTitleStyle}>{brandName} -- Upcoming Alert ! </Text>
              ) : (
                <Text style={titleStyle}>{brandName}</Text>
              )}
            </CardItem>
            <CardItem
              style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
            >
              <View style={timerViewStyle}>
                <Text style={timerTextStyle}>
                  Dose {moment(nextAlert).fromNow()}
                </Text>
              </View>
            </CardItem>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  upcomingAlertTitleStyle: {
    fontSize: 18,
    flex: 1,
    textAlign: "center",
    color: "red"
  },
  titleStyle: {
    fontSize: 18,
    flex: 1,
    textAlign: "center"
  },
  doseViewStyle: {
    flex: 1
  },
  doseTextStyle: {},
  timerViewStyle: {
    justifyContent: "space-around",
    flex: 1
  },
  timerTextStyle: {
    textAlign: "center",
    fontSize: 22
  }
};

export default AlertListDetail;
