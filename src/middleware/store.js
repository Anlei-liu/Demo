import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './saga';

function logger({ getState }) {
  return next => (action) => {
    console.log('will dispatch', action);
    const returnValue = next(action);
    console.log('state after dispatch', getState());
    return returnValue;
  };
}
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(logger, sagaMiddleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

rootSaga.map(sagaMiddleware.run);

export default store
