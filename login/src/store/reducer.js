//结合所有组件中的reducer
import {combineReducers} from "redux";
import {reducer as registerReducer} from '../components/Register/store';
import {reducer as flashReducer} from '../components/Flash/store';
import {reducer as logonReducer} from '../components/Logon/store';


export default combineReducers({
    register:registerReducer,
    flash:flashReducer,
    logon:logonReducer,
});