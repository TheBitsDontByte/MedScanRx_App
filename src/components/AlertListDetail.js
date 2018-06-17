import React, { Component } from "react";
import { View, Text, ScrollView, TouchableWithoutFeedback } from "react-native";
import _ from "lodash";
import moment from "moment";
import { Actions } from 'react-native-router-flux';

import { Card, CardItem } from "./common";

class AlertListDetail extends React.Component {
  onSpecificAlertPress() {
    Actions.medicineDetail({ medicineId: this.props.alert.medicineId });
  }

  render() {
    const {
      timerViewStyle,
      titleStyle,
      timerTextStyle,
      doseViewStyle
    } = styles;
    const { medicineName, alertDateTime } = this.props.alert;

    return (
      <TouchableWithoutFeedback onPress={this.onSpecificAlertPress.bind(this)}>
        <View>
          <Card> 
            <CardItem
              style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
            >
              <Text style={titleStyle}>{medicineName}</Text>
            </CardItem>
            <CardItem
              style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
            >
              <View style={timerViewStyle}>
                <Text style={timerTextStyle}>
                  Dose {moment(alertDateTime).fromNow()}
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
