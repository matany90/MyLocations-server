import { FETCH_CATEGORIES, ADD_CATEGORY, CATEGORY_SLIDER_CHANGED,
     CATEGORY_TEXT_CHANGED, REMOVE_CATEGORY_CLICKED, DELETE_CATEGORY, OPEN_ADD_CATEGORY_DIALOG } from '../actions/types';

const INITIAL_STATE = {categories: {}, categoryToAdd: '',
     isRemoveCategoryClicked: false, isOpenDialog: false}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {...state, categories: action.payload };
        case ADD_CATEGORY:
            return { ...state, categoryToAdd: '', categories: action.payload};   
        case CATEGORY_TEXT_CHANGED:
            return {...state, categoryToAdd: action.payload }
        case CATEGORY_SLIDER_CHANGED:
            return {...state }    
         case REMOVE_CATEGORY_CLICKED: 
            return {...state, isRemoveCategoryClicked: !state.isRemoveCategoryClicked}
         case DELETE_CATEGORY:
            return {...state, categories: action.payload }  
         case OPEN_ADD_CATEGORY_DIALOG:
            return {...state, isOpenDialog: action.payload }      
        default:
            return state;    

    }
}