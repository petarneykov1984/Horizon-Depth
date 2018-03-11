import { createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import sagas from '../sagas';
import formActionSaga from 'redux-form-saga';

import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  let store = createStore(
    connectRouter(history)(reducers),
    composeEnhancers(applyMiddleware(sagaMiddleware,routeMiddleware)),
  );

  sagaMiddleware.run(sagas);
  sagaMiddleware.run(formActionSaga);

  return store;
}
