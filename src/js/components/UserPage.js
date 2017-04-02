import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';

const UserPage = ({ userInfo }) => {

    return (
        <main class="content-container">
            <h1 class="page-header">{userInfo.name}</h1>
            <div class="current-user-info">
                <img src={userInfo.avatar_url} class="user-avatar"/>

                <div class="about-user">
                    {userInfo.followers &&
                        <p>followers: {userInfo.followers}</p>}
                    {userInfo.following &&
                        <p>followers: {userInfo.following}</p>}
                    {userInfo.created_at &&
                        <p>created_at: {moment(userInfo.created_at).format('MMMM Do YYYY')}</p>}
                    {userInfo.company &&
                        <p>company: {userInfo.company}</p>}
                    {userInfo.email &&
                        <p>email: {userInfo.email}</p>}
                    {userInfo.location &&
                        <p>location: {userInfo.location}</p>}
                    {userInfo.blog &&
                        <p>blog: <a href={userInfo.blog}>{userInfo.blog}</a></p>}
                    {userInfo.bio &&
                        <p>bio: {userInfo.bio}</p>}
                </div>
            </div>
            <Link to="users/list" class="go-back-link">
                Go back to users list
            </Link>
            <div class="clearfix"></div>
        </main>
    )
};

export default UserPage;

UserPage.propTypes = {
    userInfo: React.PropTypes.object
};