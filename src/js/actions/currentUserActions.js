import axios from 'axios';
import { api_url } from '../config';

export const REQUEST_CURRENT_USER = 'REQUEST_CURRENT_USER';
export const RECEIVE_CURRENT_USER_SUCCEED = 'RECEIVE_CURRENT_USER_SUCCEED';
export const RECEIVE_CURRENT_USER_FAILED = 'RECEIVE_CURRENT_USER_FAILED';

export const requestCurrentUser = () => {
    return {
        type: REQUEST_CURRENT_USER
    }
};

export const receiveCurrentUserSucceed = (userInfo) => {
    return {
        type: RECEIVE_CURRENT_USER_SUCCEED,
        userInfo
    }
};

export const receiveCurrentUserFailed = () => {
    return {
        type: RECEIVE_CURRENT_USER_FAILED
    }
};

export function fetchCurrentUser(username) {
    return (dispatch) => {
        dispatch(requestCurrentUser());
        return axios.get(`${api_url}/users/${username}`)
            .then((response) => {
                dispatch(receiveCurrentUserSucceed(response.data));
            })
            .catch((error) => {
                console.log(error);
                alert('Oops, something went wrong :(');
                dispatch(receiveCurrentUserFailed());
            })
    }
}