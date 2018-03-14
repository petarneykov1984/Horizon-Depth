import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Landing from './../containers/Landing';
import NotFound from './../containers/NotFound';
import Upload from './../containers/Upload';

const { PUBLIC_URL } = process.env;

export const Routes = () => (
  <Switch>
    <Redirect exact from={`/`} to={`/landing`} />
    <Route exact path={`${PUBLIC_URL}/upload`} component={Upload} />
    <Route exact path={`${PUBLIC_URL}/landing`} component={Landing} />
    <Route component={NotFound} />
  </Switch>
)
