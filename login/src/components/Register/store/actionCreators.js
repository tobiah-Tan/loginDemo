import axios from '../../../utils/request';

export const registerAc = data =>{
    //redux-thunk
    return dispatch=>{
        //不能直接写异步代码，返回一个promise对象
        return axios.post('./api/register',data);
    }

};


/*
//=======test=======
export const registerAc = ()=>{
    console.log('发起请求！！');
    return {
        type:'xxx'
    };

}*/
