import React, { Component } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import _ from "lodash";
import moment from "moment";
import { Actions } from "react-native-router-flux";

import { Card, CardItem } from "./common";

class AlertListDetail extends React.Component {
  constructor(props) {
    super();

    this.state = { image: { uri: props.alert.imageUrl } };
  }

  changeImageOnError() {
    this.setState({ image: require("../media/No_image.png") });
  }

  onSpecificAlertPress() {
    Actions.medicineDetail({ prescriptionId: this.props.alert.prescriptionId });
  }

  render() {
    const {
      upcomingAlertTitleStyle,
      timerViewStyle,
      titleStyle,
      timerTextStyle,
      doseViewStyle
    } = styles;
    const { prescriptionName, nextAlert, imageUrl } = this.props.alert;
    console.log("the props", this.props);
    return (
      <TouchableWithoutFeedback onPress={this.onSpecificAlertPress.bind(this)}>
        <View>
          <Card>
            <CardItem
              style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
            >
              {moment(nextAlert).isBefore(moment().add(59, "m")) ? (
                <Text style={upcomingAlertTitleStyle}>{prescriptionName}</Text>
              ) : (
                <Text style={titleStyle}>{prescriptionName}</Text>
              )}
            </CardItem>
            <CardItem
              style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
            >
              <View style={timerViewStyle}>
                <Text style={timerTextStyle}>
                  Take in about {moment(nextAlert).fromNow()}
                </Text>
              </View>

              <View style={{ flex: 1, alignItems: "center", }}>
                <Image
                  style={{ width: 100, height: 100 }}
                  source={this.state.image}
                  onError={this.changeImageOnError.bind(this)}
                />
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
