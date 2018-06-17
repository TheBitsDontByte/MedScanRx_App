import React, { Component } from "react";
import { ListView, Text } from "react-native";
import { connect } from "react-redux";
import _ from "lodash";

import { getAllMedicines } from "../actions/medicinesActions";
import MedicineListDetail from "./MedicineListDetail";
import LoadingAsync from "./LoadingAsync";

class MedicineList extends Component {
  componentWillMount() {
    this.props.getAllMedicines();
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
    console.log(
      "Before regdfnder, props",
      this.props.allMedicines ? true : false
    );

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
    allMedicines: state.medicines.allMedicines
  };
};

export default connect(mapStateToProps, { getAllMedicines })(MedicineList);
