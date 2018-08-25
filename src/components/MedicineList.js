import React, { Component } from "react";
import { ListView, Text } from "react-native";
import { connect } from "react-redux";
import _ from "lodash";

import { getAllMedicines, getAllPrescriptionInfo } from "../actions/medicinesActions";
import MedicineListDetail from "./MedicineListDetail";
import LoadingAsync from "./LoadingAsync";

class MedicineList extends Component {
  componentWillMount() {
    //this.props.getAllMedicines();
    //THIS NEEDS TO BE FIXED TEMP DEMO HACK
    this.props.getAllPrescriptionInfo(this.props.patientId);
    this.createDataSource(this.props.allMedicines);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps.allMedicines);
  }

  createDataSource(allMedicines) {
    if (!allMedicines) return;

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    let sortedMedicines = _.sortBy(allMedicines, ["medicineName"]);
    this.dataSource = ds.cloneWithRows(allMedicines);
  }

  renderRow(medicine) {
    return <MedicineListDetail medicine={medicine} />;
  }

  render() {
     return this.props.allMedicines 
    ? <ListView
        enableEmptySections
        dataSource={this.dataSource}  
        renderRow={this.renderRow}
      />
    : <LoadingAsync />
  ;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    allMedicines: state.medicines.allMedicines,
    patientId: state.auth.patientId
  };
};

export default connect(mapStateToProps, { getAllMedicines, getAllPrescriptionInfo })(MedicineList);
