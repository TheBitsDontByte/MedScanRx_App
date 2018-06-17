import React from "react";
import { Button, CardItem } from "./common";
import firebase from "firebase";


class LogoutButton extends React.Component {
  
  onLogoutPress() {
    firebase.auth().signOut();
  }
  
    render() {
    return (
      <CardItem>
        <Button onPress={this.onLogoutPress}>Logout</Button>
      </CardItem>
    );
  }
}

export default LogoutButton;
