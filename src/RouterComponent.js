import React from "react";
import { Scene, Router, Actions, ActionConst } from "react-native-router-flux";

import LoginForm from "./components/LoginForm";
import Header from "./components/common";
import Home from "./components/Home";
import LoadingAppStart from "./components/LoadingAppStart";
import Settings from "./components/Settings";
import Medicines from "./components/Medicines";
import MedicineDetail from "./components/MedicineDetail";
import Alerts from "./components/Alerts";

class RouterComponent extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="loading">
            <Scene hideNavBar key="app_start" component={LoadingAppStart} />
          </Scene>

          <Scene key="auth" type={ActionConst.RESET}>
            <Scene
              initial
              titleStyle={{ alignSelf: "center", color: "steelblue" }}
              key="login"
              component={LoginForm}
              title="Login"
            />
          </Scene>

          <Scene key="main" type={ActionConst.RESET}>
            <Scene
              key="home"
              titleStyle={{ alignSelf: "center", color: "steelblue" }}
              component={Home}
              title="MedScanRx Home"
              onEnter={() => Actions.refresh()}
            />
            <Scene 
              key="settings"
              titleStyle={{ color: "steelblue" }}
              // Currently broken, will need to take a look at this more (back and title dont play together :(  )
              //titleStyle={{ alignSelf: "center" }}
              component={Settings}
              title="Settings" 
              back={true}
            /> 
            <Scene 
              key="medicines"
              titleStyle={{ color: "steelblue" }}
              // Currently broken, will need to take a look at this more (back and title dont play together :(  )
              //titleStyle={{ alignSelf: "center" }}
              component={Medicines}
              title="All Medicines"
            />
            <Scene
              //Removed for now, but will think about if I want them or not ...
              // rightTitle=" Home"
              // onRight={() => Actions.main()}
              key="medicineDetail"
              titleStyle={{ color: "steelblue" }}
              component={MedicineDetail}
              title="Medicine Details"
  
            />
            <Scene
              key="alerts"
              titleStyle={{ color: "steelblue" }}
              component={Alerts}
              title="All Alerts"
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
