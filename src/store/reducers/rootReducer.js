import { combineReducers } from 'redux'
import userReducer from './user'
import authReducer from './auth'
import catalogReducer from './catalog'
import shoppingCartReducer from './shoppingCart'

const rootReducer = combineReducers({
   catalogReducer,
   userReducer,
   authReducer,
   shoppingCartReducer,
});

export default rootReducer;