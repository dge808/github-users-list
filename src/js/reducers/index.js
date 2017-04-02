import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import currentUserReducer from './currentUserReducer';

const reducer = combineReducers({
    users: usersReducer,
    currentUser: currentUserReducer
});

export default reducer;