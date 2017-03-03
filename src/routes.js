import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './containers/app';
import HomePage from './containers/HomePage';

const routes = (
    <Route path='/' component={App}>
        <IndexRoute component={HomePage}></IndexRoute>
    </Route>
);

export default routes;