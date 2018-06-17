import firebase from "firebase";
import { Actions } from 'react-native-router-flux';

export const EMAIL_CHANGED = "email_changed";
export const PASSWORD_CHANGED = "password_changed";
export const LOGIN_USER_SUCCESS = "login_user_success";
export const LOGIN_USER_FAIL = "login_user_fail";
export const LOGIN_USER = "login_user";


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

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        //Need something here for uses with no account / bad credentials
        console.log("Info was bad", email, password)
      });
  };
};

//Private / Helper functions
const loginUserFail = dispatch => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  console.log("Success here, but error due to Actions ?");
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};
