import { GET_ALL_MEDICINES, GET_MEDICINE, GET_PRESCRIPTION_WITH_ALERTS } from "../actions/medicinesActions";



export default (state = {}, action) => {
    switch(action.type) {
        case GET_ALL_MEDICINES: 
            return {...state, allMedicines: action.payload};
        case GET_MEDICINE:
        console.log("in reducer", action)
            return {...state, medicineDetail: action.payload}
        case GET_PRESCRIPTION_WITH_ALERTS:
            return { prescriptionWithAlerts: action.payload}
        default:
            return state; 
    }
}