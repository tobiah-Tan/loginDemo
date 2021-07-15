import axios from '../../../utils/request';

export const registerAc =data=>{
    //redux-thunk
    return dispatch=>{
        //返回一个promise对象
        return axios.post('./api/register',data)
    }

};