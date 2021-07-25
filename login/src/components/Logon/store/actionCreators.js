
import * as actionTypes from './actionTypes';
import axios from '../../../utils/request';

export const logonAc = data =>{
    return dispatch => {
        return axios.post('./api/logon',data);
    }
};

export const syncInfoAc = data =>{
    return {
        type:actionTypes.SYNC_STATE_INFO,
        payload:data,
    }
}