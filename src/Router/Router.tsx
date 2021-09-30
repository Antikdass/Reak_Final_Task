import React from 'react';
import {Route, Switch } from 'react-router-dom';
import { routes } from './routes';

const Router = () => {
    return (
        <Switch>
            {
                routes.map(value => <Route key={value.path} path={value.path} component={value.component} exact={value.exact}/> )
            }
        </Switch>
    );
};

export default Router;