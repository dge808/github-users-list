import {
    REQUEST_ALL_USERS,
    RECEIVE_ALL_USERS_SUCCEED,
    RECEIVE_ALL_USERS_FAILED,
    PER_PAGE_CHANGE,
    CURRENT_PAGE_CHANGE
} from '../actions/usersActions';

const initialState = {
    all: [],
    perPage: 10,
    currentPage: 0,
    isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_ALL_USERS:
            return {
                ...state,
                isFetching: true
            };
            break;
        case RECEIVE_ALL_USERS_SUCCEED:
            return {
                ...state,
                all: action.all,
                isFetching: false
            };
            break;
        case RECEIVE_ALL_USERS_FAILED:
            return {
                ...state,
                isFetching: false
            };
            break;
        case PER_PAGE_CHANGE:
            return {
                ...state,
                perPage: action.perPage
            };
            break;
        case CURRENT_PAGE_CHANGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
            break;
        default:
            return state;
    }
};

export default usersReducer;