import {LOCATION_TEXT_CHANGED, ADDRESS_TEXT_CHANGED, CATEGORY_SLIDER_CHANGED,
     FETCH_LOCATIONS, ADD_LOCATION, CHECKBOX_CLICKED, LOCATION_FILER_BY_CATEGORY,
     REMOVE_LOCATION_CLICKED, DELETE_LOCATION, COORD_BY_DRAG }
      from '../actions/types';

 export const fetchLocations = ()  => {
    let locations = localStorage.getItem('locations');
    locations = locations ? JSON.parse(locations) : {};

    return { type: FETCH_LOCATIONS, payload: locations };
}

export const addLocation = (name, address, category, coordByDrag,  callback) => dispatch => {
    let locations = localStorage.getItem('locations');
    locations = locations ? JSON.parse(locations) : {};
    locations[name] = { name, address, category, coordByDrag };
    localStorage.setItem('locations', JSON.stringify(locations));

    dispatch({ type: ADD_LOCATION, payload: locations});
    callback();
}

export const onLoctionTextChanged = (text) => {
    return {
        type: LOCATION_TEXT_CHANGED, payload: text
    };
}

export const onAddressTextChanged = (text) => {
    return {
        type: ADDRESS_TEXT_CHANGED, payload: text
    };
}

export const onCategorySliderChanged = (text) => {
    return {
        type: CATEGORY_SLIDER_CHANGED, payload: text
    };
}

export const onCheckBoxClicked = () => {
    return {type: CHECKBOX_CLICKED, payload: true }
}

export const onFilterByCategoryChanged = (text) => {
    return {type: LOCATION_FILER_BY_CATEGORY, payload: text }
}

export const onRemoveLocationClick = () => {
    return {type: REMOVE_LOCATION_CLICKED, payload: true}
}

export const deleteLocation = (name) => {
    let locations = localStorage.getItem('locations');
    locations = locations ? JSON.parse(locations) : {};
    delete locations[name]
    localStorage.setItem('locations', JSON.stringify(locations));

    return {type: DELETE_LOCATION, payload: locations};
}

export const onDragendComplete = (coord) => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();

    return { type: COORD_BY_DRAG, payload: {lat, lng}};
}