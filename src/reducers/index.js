import { combineReducers } from 'redux';
import authReducer from './authReducer';
import homeReducer from './homeReducer';
import medicinesReducer from './MedicinesReducer';
import AlertsReducer from './AlertsReducer';


export default combineReducers({
    auth: authReducer,
    home: homeReducer,
    medicines: medicinesReducer,
    alerts: AlertsReducer
});