
import {combineReducers} from 'redux'

var initialState = {
     result:""
}
export const data = (state = initialState, action) =>{

    switch (action.type) {
        case "CALCULATE_RESULT":
            return {
                ...state, result:action.payload.result
            };

        default:
            return state;
    }
}
export default combineReducers({
    data
});