import React, { Component } from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import _ from "lodash";

import { getNextFiveMedalerts } from "../actions/HomeActions";
import MedicineAlertDetail from "./MedicineAlertDetail";
import LoadingAsync from "./LoadingAsync";

class MedicineAlertList extends Component {
  componentWillMount() {
    this.props.getNextFiveMedalerts();
  }

  renderMedicines() {
    return _.map(this.props.nextFiveMedalerts, (val, key) => {
      return <MedicineAlertDetail key={val.medicineId} medicine={val} />;
    });
  }

  render() {
    console.log("Im mounting the list")
    
    return(
      this.props.nextFiveMedalerts 
        ? <ScrollView>{this.renderMedicines()}</ScrollView>  
        : <LoadingAsync />   
    ); 
    
  }
}

const mapStateToProps = state => {
  return {
    nextFiveMedalerts: state.home.nextFiveMedalerts
  };
};

export default connect(mapStateToProps, { getNextFiveMedalerts })(
  MedicineAlertList
);
