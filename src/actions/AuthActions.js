import jwtDecode from "jwt-decode";
import { Actions } from "react-native-router-flux";
import axios from "axios";
import { BASE_URL } from "../dev_misc/globals";
import { AsyncStorage } from "react-native";

export const EMAIL_CHANGED = "email_changed";
export const PASSWORD_CHANGED = "password_changed";
export const LOGIN_USER_SUCCESS = "login_user_success";
export const LOGIN_USER_ERROR = "login_user_error";
export const LOGOUT_USER = "logout_user";

//Auth actions
export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const reloginUser = () => {
  return dispatch => {
    axios
      .get(`${BASE_URL}/Api/Auth/Patient/Refresh`)
      .then(response => {
        setTokenAndDispatch(response.data.token, dispatch);
      })
      .catch(error => {
        console.log("error on relogin", error)
      });
  };
}; 

export const loginUser = ({ email, password }) => {
  return dispatch => {
    axios
      .post(`${BASE_URL}/Api/Auth/Patient/Login`, { userName: email, password })
      .then(response => {
        setTokenAndDispatch(response.data.token, dispatch);
      })
      .catch(error => {
        console.log("error");
        dispatch ({
          type: LOGIN_USER_ERROR
        })
      });
  };
};

const setTokenAndDispatch = async (token, dispatch) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  await AsyncStorage.setItem("jwt", token);

  let { patientId, email } = jwtDecode(token);
  console.log("set token, prob error ...")
  Actions.main();
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: { user: email, patientId }
  });

 
};

export const logoutUser = () => {
  AsyncStorage.removeItem("jwt");
  delete axios.defaults.headers.common["Authorization"];
  Actions.auth();
  return {
    type: LOGOUT_USER
  };
};
const loginUserFail = dispatch => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user, tempPatientId) => {
  console.log("LoggedInPatientId", tempPatientId);
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: { user, patientId: tempPatientId }
  });

  Actions.main();
};
