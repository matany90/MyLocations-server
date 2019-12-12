import { FETCH_LOCATIONS, LOCATION_TEXT_CHANGED,
     ADDRESS_TEXT_CHANGED, CATEGORY_SLIDER_CHANGED, ADD_LOCATION, CHECKBOX_CLICKED
    , LOCATION_FILER_BY_CATEGORY, REMOVE_LOCATION_CLICKED, DELETE_LOCATION, COORD_BY_DRAG } from '../actions/types';

const INITIAL_STATE = {locations: {}, locationName: '', addressName: '',
         categoryNameChoosed: '', isCheckBoxClicked: false, filterCategoryValue: '',
         isRemoveLocationClicked: false, coordByDrag: {}}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_LOCATIONS:
            return {...state, locations: action.payload };
        case LOCATION_TEXT_CHANGED:
            return {...state, locationName: action.payload }
        case ADDRESS_TEXT_CHANGED:
            return {...state, addressName: action.payload }   
        case CATEGORY_SLIDER_CHANGED: 
            return {...state, categoryNameChoosed: action.payload } 
        case ADD_LOCATION:
            return {...state, locationName: '', addressName: '', categoryNameChoosed: '', locations: action.payload}    
        case CHECKBOX_CLICKED:
            return {...state, isCheckBoxClicked: !state.isCheckBoxClicked}  
        case LOCATION_FILER_BY_CATEGORY:
            return {...state, filterCategoryValue: action.payload}    
        case REMOVE_LOCATION_CLICKED:
            return {...state, isRemoveLocationClicked: !state.isRemoveLocationClicked}; 
        case DELETE_LOCATION:
            return {...state, locations: action.payload } 
            case COORD_BY_DRAG:
            return {...state, coordByDrag: action.payload}                
        default:
            return state;    

    }
}