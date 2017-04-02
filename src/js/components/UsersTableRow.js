import React from 'react';
import { hashHistory } from 'react-router';

const UsersTableRow = ({ rowInformation }) => {
    const handleRowClick = () => {
        hashHistory.push(`/users/${rowInformation.login}`)
    };

    return (
        <tr onClick={handleRowClick}>
            <td class="avatar-cell">
                <img src={rowInformation.avatar_url} class="user-avatar" alt={rowInformation.login}/>
            </td>
            <td style={{width: '35%'}}>
                {rowInformation.login}
            </td>
            <td style={{width: '35%'}}>
                {rowInformation.html_url}
            </td>
        </tr>
    )
};

export default UsersTableRow;

UsersTableRow.propTypes = {
    rowInformation: React.PropTypes.object
};
