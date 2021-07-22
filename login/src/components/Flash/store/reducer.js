
import * as actionTypes from './actionTypes';

export default(state=[],action)=>{
    switch(action.type){
        case actionTypes.ADD_FLASH:
            return [
                ...state,
                action.payload
            ];
        case actionTypes.DELETE_FLASH:
            const idx = state.findIndex(item => item.id === action.id);
            return [
                ...state.splice(0,idx),
                ...state.splice(idx+1)
            ];
        default:
            return state;
    }
}