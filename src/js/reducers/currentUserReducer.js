/**
 * Created by alina on 01.04.17.
 */
import {
    REQUEST_CURRENT_USER,
    RECEIVE_CURRENT_USER_SUCCEED,
    RECEIVE_CURRENT_USER_FAILED
} from '../actions/currentUserActions';

const initialState = {
    userInfo: {
        name: '',
        followers: null,
        following: null,
        created_at: "",
        company: null,
        email: "",
        location: "",
        blog: "",
        bio: null
    },
    isFetching: false
};

const currentUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_CURRENT_USER:
            return {
                ...state,
                isFetching: true
            };
            break;
        case RECEIVE_CURRENT_USER_SUCCEED:
            return {
                ...state,
                userInfo: action.userInfo,
                isFetching: false
            };
            break;
        case RECEIVE_CURRENT_USER_FAILED:
            return {
                ...state,
                isFetching: false
            };
            break;
        default:
            return state;
    }
};

export default currentUserReducer;