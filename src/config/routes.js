import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Landing from './../containers/Landing';
import NotFound from './../containers/NotFound';
import Upload from './../containers/Upload';
import Loading from './../containers/Loading';
import Result from './../containers/Result';

const { PUBLIC_URL } = process.env;

export const Routes = () => (
  <Switch>
    <Redirect exact from={`/`} to={`/landing`} />
    <Route exact path={`${PUBLIC_URL}/upload`} component={Upload} />
    <Route exact path={`${PUBLIC_URL}/loading`} component={Loading} />
    <Route exact path={`${PUBLIC_URL}/landing`} component={Landing} />
    <Route exact path={`${PUBLIC_URL}/result`} component={Result} />
    <Route component={NotFound} />
  </Switch>
)
