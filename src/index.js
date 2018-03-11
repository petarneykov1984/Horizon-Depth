import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './config';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './config/store';
import { Routes } from './config/routes';
import './styles/reset.css';
import './styles/fonts.css';
import { StyleRoot } from 'radium';
import 'npm-font-open-sans';
import 'babel-polyfill';

const store = configureStore();

/*if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update')
  whyDidYouUpdate(React)
}*/

ReactDOM.render(
  <Provider store={store}>
    <StyleRoot>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </StyleRoot>
  </Provider>,
  document.getElementById('root')
);
