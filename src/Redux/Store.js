import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as appReducer } from "../Redux/AppData/reducer";
import { reducer as authReducer } from "../Redux/AuthData/reducer"

const rootReducer = combineReducers({appReducer,authReducer})
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE||compose;
const Store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    

export {Store}