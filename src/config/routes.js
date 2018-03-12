import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Landing from './../containers/Landing';
import NotFound from './../containers/NotFound';
import Login from './../containers/Login';

const { PUBLIC_URL } = process.env;

export const Routes = () => (
  <Switch>
    <Redirect exact from={`/`} to={`/landing`} />
    <Route exact path={`${PUBLIC_URL}/login`} component={Login} />
    <Route exact path={`${PUBLIC_URL}/landing`} component={Landing} />
    <Route component={NotFound} />
  </Switch>
)
