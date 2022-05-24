import { combineReducers } from 'redux';
import userReducer from './user';
import authReducer from './auth';
import catalogReducer from './catalog';
import shoppingCartReducer from './shoppingCart';
import orderReducer from './order';

const rootReducer = combineReducers({
   catalogReducer,
   userReducer,
   authReducer,
   shoppingCartReducer,
   orderReducer,
});

export default rootReducer;