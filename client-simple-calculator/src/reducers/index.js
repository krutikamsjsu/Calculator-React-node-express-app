import {combineReducers} from 'redux'
import OperandsReducer from './reducer-operands'

const allReducers = combineReducers({
    operands : OperandsReducer
});

export default allReducers;