import React, { Component } from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import _ from "lodash";

import { getAllUpcomingAlerts } from "../actions/HomeActions";
import MedicineAlertDetail from "./MedicineAlertDetail";
import LoadingAsync from "./LoadingAsync";

class MedicineAlertList extends Component {
  componentWillMount() {

    //DEV TESTING NEED THE PATIENTID SOME OTHER WAY
    //This actually seems to get called every time ... whats uP ?
    console.log("Im mounting");
    this.props.getAllUpcomingAlerts(this.props.patientId);
  }

  renderMedicines() {
    return _.map(this.props.allUpcomingAlerts, (val, key) => {
      return <MedicineAlertDetail key={val.medicineId} medicine={val} />;
    });
  }

  render() {    
    return(
      this.props.allUpcomingAlerts 
        ? <ScrollView>{this.renderMedicines()}</ScrollView>   
        : <LoadingAsync />   
    ); 
    
  }
}

const mapStateToProps = state => {
  return {
    allUpcomingAlerts: state.home.allUpcomingAlerts,
    patientId: state.auth.patientId
  };
};

export default connect(mapStateToProps, { getAllUpcomingAlerts })(
  MedicineAlertList
);
