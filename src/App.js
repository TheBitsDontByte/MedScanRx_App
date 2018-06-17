/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, CardItem } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import firebase from "firebase";

import reducers from "./reducers";
import RouterComponent from "./RouterComponent";

class App extends Component {
   componentWillMount() {
    let config = {
      apiKey: "AIzaSyDEYoVnix8CBGVV-HGw1a2UCaEgyTfa0Dk",
      authDomain: "medscanrx.firebaseapp.com",
      databaseURL: "https://medscanrx.firebaseio.com",
      projectId: "medscanrx",
      storageBucket: "medscanrx.appspot.com",
      messagingSenderId: "613577904488"
    };
    firebase.initializeApp(config);

  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store} > 
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
