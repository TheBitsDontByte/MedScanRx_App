import { GET_ALL_MEDICINES, GET_MEDICINE } from "../actions/medicinesActions";



export default (state = {}, action) => {
    switch(action.type) {
        case GET_ALL_MEDICINES: 
            return {...state, allMedicines: action.payload};
        case GET_MEDICINE:
        console.log("in reducer", action)
            return {...state, medicineDetail: action.payload}
        default:
            return state; 
    }
}