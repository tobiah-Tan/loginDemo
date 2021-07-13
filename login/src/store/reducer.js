//结合所有组件中的reducer
import {combineReducers} from "redux";
import {reducer as registerReducer} from '../components/Register/store'


export default combineReducers({
    register:registerReducer
});