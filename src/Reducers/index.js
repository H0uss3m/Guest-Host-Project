import {combineReducers} from 'redux'
import contactReducer from './contactReducer';
import profilReducer from './profilReducer';
import  UserReducer  from './loginReducer';
import userReducer from './userReducer';

export default combineReducers({contactReducer,profilReducer,UserReducer,userReducer})