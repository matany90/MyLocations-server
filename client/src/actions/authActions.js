import { FETCH_USER } from './types';
import axios from 'axios';

export const fetchUser = (fetchCategoriesCb, fetchLocationsCb) => async dispatch => {
    const { data } = await axios.get('/api/current_user');
    console.log(data)
    fetchCategoriesCb(data.categories);

    dispatch({ type: FETCH_USER, payload: data.user });
}