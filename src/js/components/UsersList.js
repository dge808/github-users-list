import React from 'react';

import TableRow from './UsersTableRow';
import TableNavigation from './TableNavigation';

const columnsData = [
    {
        name: 'Avatar',
        style: {width: '30%'}
    },
    {
        name: 'Login Name',
        style: {width: '35%'}
    },
    {
        name: 'Profile Link',
        style: {width: '35%'}
    }
];

const UsersList = ({ usersData, onPageChange, currentPage, perPage, onPerPageChange }) => {
    const tableHeader = columnsData.map((columnData, index) => {
        return (
            <th key={index} style={columnData.style}>
                {columnData.name}
            </th>
        )
    });

    const tableBody = usersData.map((user, index) => <TableRow key={user.id}
                                                               rowInformation={user}/>);
    return (
        <main class="content-container">
            <h1 class="page-header">Users List</h1>
            <TableNavigation onPageChange={onPageChange}
                             currentPage={currentPage}
                             perPage={perPage}
                             onPerPageChange={onPerPageChange}/>
            <table class="users-table">
                <thead>
                <tr>
                    {tableHeader}
                </tr>
                </thead>
                <tbody>
                    {tableBody}
                </tbody>
            </table>
        </main>
    )
};

export default UsersList;

UsersList.propTypes = {
    usersData: React.PropTypes.array,
    onPageChange: React.PropTypes.func,
    currentPage: React.PropTypes.number,
    perPage: React.PropTypes.number,
    onPerPageChange: React.PropTypes.func
};