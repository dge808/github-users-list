import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory, Redirect } from 'react-router';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { polyfill } from 'es6-promise';
import '../styles/main.scss';

polyfill();

import App from './components/App';
import UsersListContainer from './containers/UsersListContainer';
import UserPageContainer from './containers/UserPageContainer';
import NotFound from './components/NotFound';

const NODE_ENV = process.env.NODE_ENV || 'development';

//show redux devtools only for dev build
const store = NODE_ENV == 'production' ? createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
) : createStore(reducer, compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

const app = <Provider store={store}>
    <Router history={hashHistory}>
        <Redirect from="/" to="users"/>
        <Route path="users" component={App}>
            <IndexRedirect to="list"/>
            <Route path="list" component={UsersListContainer}/>
            <Route path=":username" component={UserPageContainer}/>
        </Route>
        <Route path="*" component={NotFound} />
    </Router>
</Provider>;


ReactDOM.render(app, document.getElementById('app'));