import { combineReducers } from 'redux'
import catalogReducer from './catalog'
import createUserSesion from './createUserSesion'

const rootReducer = combineReducers({
   catalogReducer,
   createUserSesion,
});

export default rootReducer;