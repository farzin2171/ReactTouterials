import axios from 'axios'
import * as actions from '../api'
const api=({dispatch})=>next=>async action=>{

    if(action.type !== actions.apiCall.type)
         return next(action);
    
    
    const {url,method,data,onStart,onSuccess,onError} =action.payload;
    if(onStart)
     dispatch({type:onStart});

     next(action);
    try{
        const response=await axios.request({
            baseURL:'https://localhost:44351/api',
            url,
            method,
            data
        });

        //General
        dispatch(actions.apiCallSuccess(response.data));
        if(onSuccess)
         dispatch({type:onSuccess,payload:response.data});
    }
    catch(error){
        //General
        dispatch(actions.apiCallFailed(error.message));
        //Specific
        if(onError) dispatch({type:onError,payload:error});
    }

};

export default api;