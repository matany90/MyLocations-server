import { ADD_CATEGORY, FETCH_CATEGORIES, CATEGORY_TEXT_CHANGED,
     REMOVE_CATEGORY_CLICKED, DELETE_CATEGORY, OPEN_ADD_CATEGORY_DIALOG } from '../actions/types';
import axios from 'axios';

export const fetchCategories = (categories)  => {
    return { type: FETCH_CATEGORIES, payload: categories };
}

export const addCategory = (categoryToAdd) => async dispatch => { 
    const { data } = await axios.post('/api/categories/addCategory', { categoryToAdd });

    dispatch({ type: ADD_CATEGORY, payload: data.categories});
}

export const onCategoryTextChanged = (text) => {
    return {
        type: CATEGORY_TEXT_CHANGED, payload: text
    }
}

export const onRemoveCategoryClick = () => {
    return {type: REMOVE_CATEGORY_CLICKED, payload: true}
}

export const deleteCategory= (name) => async dispatch => { 
    const { data } = await axios.post('/api/categories/deleteCategory', { name });

    dispatch({type: DELETE_CATEGORY, payload: data.categories}); 
}

export const DialogEvent = (bool) => {
    return {type: OPEN_ADD_CATEGORY_DIALOG, payload: bool}
}