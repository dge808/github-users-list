import axios from 'axios';
import { api_url } from '../config';

export const REQUEST_ALL_USERS = 'REQUEST_ALL_USERS';
export const RECEIVE_ALL_USERS_SUCCEED = 'RECEIVE_ALL_USERS_SUCCEED';
export const RECEIVE_ALL_USERS_FAILED = 'RECEIVE_ALL_USERS_FAILED';
export const PER_PAGE_CHANGE = 'PER_PAGE_CHANGE';
export const CURRENT_PAGE_CHANGE = 'CURRENT_PAGE_CHANGE';


export const requestAllUsers = () => {
    return {
        type: REQUEST_ALL_USERS
    }
};

export const receiveAllUsersSucceed = (all) => {
    return {
        type: RECEIVE_ALL_USERS_SUCCEED,
        all
    }
};

export const receiveAllUsersFailed = () => {
    return {
        type: RECEIVE_ALL_USERS_FAILED
    }
};

export const currentPageChange = (currentPage) => {
    return {
        type: CURRENT_PAGE_CHANGE,
        currentPage
    }
};

export const perPageChange = (perPage) => {
    return {
        type: PER_PAGE_CHANGE,
        perPage
    }
};

export function fetchAllUsers(pageNumber, perPage) {
    return (dispatch) => {
        dispatch(requestAllUsers());
        return axios.get(`${api_url}/users?since=${pageNumber}&per_page=${perPage}`)
            .then((response) => {
                dispatch(receiveAllUsersSucceed(response.data));
            })
            .catch((error) => {
                console.log(error);
                alert('Oops, something went wrong :(');
                dispatch(receiveAllUsersFailed());
            })
    }
}