import React from "react";
import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import { Text, View } from "react-native";

import { AsyncSpinner, Card } from "./common";

const LoadingAppStart = (LoadingAppStart = () => {
  firebase.auth().onAuthStateChanged(user => {
    user ? Actions.main() : Actions.auth();
  });

  return (
    <View> 
      <View style={styles.containerStyle}>
        <Text style={styles.titleStyle}>MedScanRx</Text>
        <AsyncSpinner />
      </View>   
    </View>   
  );
});




const styles = {
  containerStyle: {
    height: "100%",
    flexDirection: "column", 
    backgroundColor: "#c1e8ff" ,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
    
    //backgroundColor: "#def3f9"
  },
  titleStyle: { 
    fontSize: 42,
    textAlign: "center",
    paddingBottom: 20,

  }
};

export default LoadingAppStart;
