import React, { Component } from "react";
import { CardItem, Card, Button } from "./common";
import { Text, View } from "react-native";
import LogoutButton from "./LogoutButton";

class Settings extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#c1e8ff" }}>
        <Card>
          <CardItem>
            <Text>Account Settings</Text>
          </CardItem>
          <LogoutButton />
        </Card>
      </View>
    );
  }
}

export default Settings;
