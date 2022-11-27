import * as types from "./actionType";

const initState = {
    books:[],
    isLoading:false,
    isError:false
}
const reducer = (oldState = initState,action)=>{
const {type,payload} = action;
switch(type){
    default : return oldState;
    case types.GET_BOOK_ERROR:
        return {...oldState,isLoading:false,isError:true}
    case types.GET_BOOK_REQUEST:
        return {...oldState,isLoading:true}
    case types.GET_BOOK_SUCCESS:
        return {...oldState,books:payload,isLoading:false}
}   
}
export {reducer}