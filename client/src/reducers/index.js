import { combineReducers } from 'redux';
import locationsReducer from './locationsReducer';
import categoriesReducer from './categoriesReducer';
import authReducer from './authReducer';

export default combineReducers({
    locations: locationsReducer,
    categories: categoriesReducer,
    auth: authReducer
})