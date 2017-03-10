import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './containers/app';
import HomePage from './containers/homePage';
import Article from './containers/article';

const routes = (
    <Route path='/' component={App}>
        <IndexRoute component={HomePage}></IndexRoute>
        <Route path="article/:id" component={Article}></Route>
    </Route>
);

export default routes;