//结合所有组件中的reducer
import {combineReducers} from "redux";
import {reducer as registerReducer} from '../components/Register/store';
import {reducer as flashReducer} from '../components/Flash/store'


export default combineReducers({
    register:registerReducer,
    flash:flashReducer
});