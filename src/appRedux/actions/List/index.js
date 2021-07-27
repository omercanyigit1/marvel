import {
    FETCH_LIST_REQUEST,
    FETCH_LIST_SUCCESS,
    FETCH_LIST_FAILED,
    MARVEL_PRIVATE_KEY,
    MARVEL_PUBLIC_KEY,
    API_URL
} from "../../../constants/ActionTypes";

import axios from "axios";
import crypto from 'crypto';

//i created hash value dynamically. If you change the key values hash will be update automatically.
export const HASH_VALUE = crypto.createHash('md5').update(1 + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY).digest('hex');

//this is the request function to start redux state
export const getListRequest = () => ({
    type: FETCH_LIST_REQUEST
});

//this is the failed function if the response has any error
export const getListFailed = error => ({
    type: FETCH_LIST_FAILED,
    payload: error
});

//this is the success function if the response status 200 and result has value.
export const getListSuccess = data => ({
    type: FETCH_LIST_SUCCESS,
    payload: data
});

//this is the list function to get lists. You can fetch the difference datas with the value parameters, such as comics or characters etc.
export const getList = (value, offset, query) => {

    return dispatch => {
        dispatch(getListRequest());
        if(!query) {
            axios.get(`${API_URL}/${value}?orderBy=-onsaleDate&offset=${offset}&ts=1&apikey=${MARVEL_PUBLIC_KEY}&hash=${HASH_VALUE}`).then((response) => {
                dispatch(getListSuccess(response.data.data));
            }).catch((error) => {
                dispatch(getListFailed(error.response.data));
            });
        } else {
            axios.get(`${API_URL}/${value}?orderBy=-onsaleDate&offset=${offset}&titleStartsWith=${query}&ts=1&apikey=${MARVEL_PUBLIC_KEY}&hash=${HASH_VALUE}`).then((response) => {
                dispatch(getListSuccess(response.data.data));
            }).catch((error) => {
                dispatch(getListFailed(error.response.data));
            });
        }
    }
};
