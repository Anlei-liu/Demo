import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

rootSaga.map(sagaMiddleware.run);

export default store
