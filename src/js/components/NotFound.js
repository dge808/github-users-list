import React from 'react';
import {hashHistory} from 'react-router';
const NotFound = () =>
    <div class="database-content-container">
        <h3>404 page not found</h3>
        <p>We are sorry but the page you are looking for does not exist.</p>
        <button onClick={hashHistory.goBack}>
            Go back
        </button>
    </div>

export default NotFound;