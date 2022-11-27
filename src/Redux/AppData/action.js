import axios from "axios"
import * as types from "./actionType"

const getBooksRequest = ()=>{
    return {
        type:types.GET_BOOK_REQUEST
    }
}
const getBooksSuccess = (payload)=>{
    return {
        type:types.GET_BOOK_SUCCESS,
        payload
    }
}
const getBooksError = ()=>{
    return {
        type:types.GET_BOOK_ERROR
    }
}


const getBooks = (params) =>async (dispatch)=>{
    dispatch(getBooksRequest())
    try {
        const r = await axios.get(" http://localhost:8080/books",params)
        dispatch(getBooksSuccess(r.data))
    } catch (e) {
        dispatch(getBooksError())
    }
}
export {getBooks}