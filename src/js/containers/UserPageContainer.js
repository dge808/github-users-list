import React from 'react';
import { connect } from 'react-redux';

import { fetchCurrentUser } from '../actions/currentUserActions';
import UserPage from '../components/UserPage';

class UserPageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.dispatch = props.dispatch;
    }

    componentWillMount() {
        this.dispatch(fetchCurrentUser(this.props.params.username));
    }

    render() {
        const {isFetching, userInfo} = this.props.user;
        if (isFetching) {
            return (
                <div class="loader"/>
            );
        }

        return (
            <UserPage userInfo={userInfo}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.currentUser
    }
};

export default connect(mapStateToProps)(UserPageContainer);