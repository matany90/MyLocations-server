import { FETCH_USER } from './types';
import axios from 'axios';

export const fetchUser = (fetchCategoriesCb, fetchLocationsCb) => async dispatch => {
    const { data } = await axios.get('/api/current_user');
    fetchCategoriesCb(data.categories);
    fetchLocationsCb(data.locations);

    dispatch({ type: FETCH_USER, payload: data });
}