import { combineReducers } from 'redux';
import locationsReducer from './locationsReducer';
import categoriesReducer from './categoriesReducer';

export default combineReducers({
    locations: locationsReducer,
    categories: categoriesReducer
})