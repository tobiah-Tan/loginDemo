import * as actionTypes from './actionTypes';
import isEmpty from 'lodash/isEmpty';
const initState = {
    isLogon:false,
    user:{}
};


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SYNC_STATE_INFO:
            return {
                isLogon: !isEmpty(action.payload),
                user:action.payload
            };
        default:
            return state;
    }

}