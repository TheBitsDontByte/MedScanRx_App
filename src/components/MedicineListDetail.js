import React, { Component } from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import { Actions } from "react-native-router-flux";

import { Card, CardItem } from "./common";

class MedicineListDetail extends Component {
  onSpecificMedicinePress() {
    Actions.medicineDetail({ prescriptionId: this.props.medicine.prescriptionId });
  }

  render() {
    const {
      brandName,
      genericName,
      color,
      shape,
      identifiers,
      dosage,
      doctorNotes,
      warnings,
      barcode,
    } = this.props.medicine;
    const { titleStyle, doseViewStyle } = styles;
    return (
      <TouchableWithoutFeedback 
        onPress={this.onSpecificMedicinePress.bind(this)}
      >
        <View>
          <Card>
            <CardItem
              style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
            >
              <Text style={titleStyle}>Brand Name: {brandName}</Text>
            </CardItem>
            <CardItem
              style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
            >
              <View style={doseViewStyle}>
                 <Text>Barcode: {barcode} </Text>
                <Text>
                  Description:{" "}
                  {`${color}, ${shape}, marked with ${identifiers}`}
                </Text>
                <Text>Dose: {dosage} </Text>
                <Text>Warnings: {warnings} </Text>
                <Text>Doctor's Note: {doctorNotes} </Text>
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

export default MedicineListDetail;
