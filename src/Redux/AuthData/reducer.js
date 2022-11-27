import * as types from "./actionType";

const initState = {
isAuth:false,
token:'',
isAuthLoading:false,
isAuthError:false
}
const reducer = (oldState = initState,action)=>{
const {type,payload} = action
switch(type){
    case types.USER_LOGIN_REQUEST:
        return{...oldState,isAuthLoading:true}
    case types.USER_LOGIN_SUCCESS:
        return{
        ...oldState,
        isAuth:true,
        isAuthLoading:false,
        token:payload
        }
    case types.USER_LOGIN_ERROR:
        return{
        ...oldState,
        isAuthError:true,
        isAuthLoading:false
        }
    default : return oldState
}
}
export {reducer}