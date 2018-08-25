import React, { Component } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import _ from "lodash";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import moment from "moment";

import ScannerTester from "./ScannerTester";
import { Card, CardItem, Button } from "./common";
import { getPrescriptionWithAlerts } from "../actions/medicinesActions";
import LoadingAsync from "./LoadingAsync";

class MedicineDetail extends Component {
  constructor() {
    super();
    this.state = {image: { uri: null }}
    this.onScanNowPress = this.onScanNowPress.bind(this);
  }

  componentWillMount() {
    this.props.getPrescriptionWithAlerts(this.props.prescriptionId);

  }

  componentWillReceiveProps(nextProps) {
    console.log("the next props", nextProps)
    if (nextProps.prescriptionWithAlerts) {
      this.setState({image: { uri: nextProps.prescriptionWithAlerts.imageUrl }})
    }
  }

  changeImageOnError(){
    console.log("errored")
    this.setState({image: require("../media/No_image.png")})
  }

  renderAlerts(scheduledAlerts) {
    return _.map(scheduledAlerts, alert => {
      return (
        <Card>
          <CardItem>
            <Text key={alert.alertDateTime}>{alert.alertDateTime}</Text>
          </CardItem>
        </Card>
      );
    });
  }

  onScanNowPress() {
    Actions.medicineScanner({
      prescriptionWithAlerts: this.props.prescriptionWithAlerts
    });
  }

  render() {
    if (!this.props.prescriptionWithAlerts) return <LoadingAsync />;
    const {
      prescriptionName,
      shape,
      identifiers,
      color,
      dosage,
      warnings,
      currentNumberOfDoses,
      doctorNotes,
      imageUrl,
      scheduledAlerts
    } = this.props.prescriptionWithAlerts;
    const {
      alertTextStyle,
      titleStyle,
      doseViewStyle,
      containerStyle,
      categoryStyle,imageStyle
    } = styles;
    console.log("da props", this.props.prescriptionWithAlerts, imageUrl);
    console.log("And state", this.state)
    return (
      <View style={containerStyle}> 
        <Card>
          <CardItem
            style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
          >
            <Text style={titleStyle}>{prescriptionName}'s Details</Text>
          </CardItem>
          <CardItem>
            <View style={imageStyle}>
              <Image
                style={{ width: 150, height: 150 }}
                source={ this.state.image}
                onError={ this.changeImageOnError.bind(this) }
              />
            </View>
          </CardItem>
          <CardItem style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
            <View style={doseViewStyle}>
              <Text>
                <Text style={categoryStyle}>Description:</Text>{" "}
                {`${color} and ${shape} with ${identifiers} marking(s)`}
              </Text>
              <Text>
                <Text style={categoryStyle}>Dosage:</Text> {dosage}{" "}
              </Text>
              <Text> 
                <Text style={categoryStyle}>Remaining Doses:</Text>{" "}
                {currentNumberOfDoses}
              </Text>
              <Text>
                <Text style={categoryStyle}>Warnings:</Text>{" "}
                {warnings || "(none)"}{" "}
              </Text>
              <Text>
                <Text style={categoryStyle}>Doctor's Notes:</Text>{" "}
                {doctorNotes || "(none)"}
              </Text>
            </View>
          </CardItem>
        </Card>
        <Text style={alertTextStyle}>
          Upcoming Alerts for {prescriptionName}
        </Text>
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
  categoryStyle: { fontWeight: "bold" },
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
  },
  imageStyle: {
    flex: 1,
    alignItems: "center" 
  }
};

const mapStateToProps = (state, ownProps) => {
  console.log("State in mstp", state);
  return {
    prescriptionWithAlerts: state.medicines.prescriptionWithAlerts
  };
};

export default connect(
  mapStateToProps,
  { getPrescriptionWithAlerts }
)(MedicineDetail);
