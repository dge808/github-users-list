import React from 'react';
import { connect } from 'react-redux';

import { fetchAllUsers, currentPageChange, perPageChange } from '../actions/usersActions';
import UsersList from '../components/UsersList';

class UsersListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.dispatch = props.dispatch;
    }

    componentWillMount() {
        this.getUsers(this.props.users.currentPage, this.props.users.perPage);
    }

    getUsers(pageNumber, perPage) {
        this.dispatch(fetchAllUsers(pageNumber, perPage));
    }

    handlePageChange = (newPageNumber) => {
        if (newPageNumber < 0) {
            return false;
        }
        this.dispatch(currentPageChange(newPageNumber));
        this.getUsers(newPageNumber, this.props.users.perPage);
    };

    handlePerPageChange = (event) => {
        this.dispatch(perPageChange(event.target.value));
        this.getUsers(this.props.users.currentPage, event.target.value);
    };

    render() {
        const { users } = this.props;

        if (users.isFetching) {
            return (
                <div class="loader"/>
            );
        }

        return (
            <UsersList usersData={users.all}
                       onPageChange={this.handlePageChange}
                       currentPage={users.currentPage}
                       perPage={users.perPage}
                       onPerPageChange={this.handlePerPageChange}/>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};

export default connect(mapStateToProps)(UsersListContainer);