import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import { Actions } from "react-native-router-flux";
import moment from "moment";

import { Card, CardItem } from "./common";

class MedicineAlertDetail extends React.Component {
  onSpecificMedicinePress() {
    Actions.medicineDetail({ medicineId: this.props.medicine.medicineId });
  }

  render() {
    const {
      timerViewStyle,
      titleStyle,
      timerTextStyle,
      doseViewStyle
    } = styles; 
    const {
      medicineName,
      dosage,
      specialInstructions,
      alertDateTime,

      shape,
      color,
      identifiers,
    } = this.props.medicine;

    return (
      <TouchableWithoutFeedback 
        onPress={this.onSpecificMedicinePress.bind(this)}
      >
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
              <View style={doseViewStyle}>
                <Text>Description: {`${color}, ${shape}, with ${identifiers}`}</Text>   
                <Text>Dose: {dosage} </Text>
                <Text>Special Instructions: {specialInstructions} </Text> 
              </View> 
              <View style={timerViewStyle}>
                <Text style={timerTextStyle}>Next Dose {moment(alertDateTime).fromNow()}</Text>
                  
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

export default MedicineAlertDetail;
