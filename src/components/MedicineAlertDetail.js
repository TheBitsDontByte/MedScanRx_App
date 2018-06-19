import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import { Actions } from "react-native-router-flux";
import moment from "moment";

import { Card, CardItem } from "./common";

class MedicineAlertDetail extends React.Component {
  onSpecificMedicinePress() {
    Actions.medicineDetail({ prescriptionId: this.props.medicine.prescriptionId });
  }

  render() {
    const {
      timerViewStyle,
      titleStyle,
      timerTextStyle,
      doseViewStyle
    } = styles; 
    console.log("Alert detail props", this.props)
    const {
      brandName,
      dosage,
      doctorNotes,
      nextAlert,
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
              <Text style={titleStyle}>{brandName}</Text>
            </CardItem>
            <CardItem
              style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
            >
              <View style={doseViewStyle}>
                <Text>Description: {`${color}, ${shape}, marked with ${identifiers}`}</Text>   
                <Text>Dose: {dosage} </Text>
                <Text>Special Instructions: {doctorNotes} </Text> 
              </View> 
              <View style={timerViewStyle}>
                <Text style={timerTextStyle}>Next Dose {moment(nextAlert).fromNow()}</Text>
                  
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
