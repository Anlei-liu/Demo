import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import addNum from '../containers/HomePage/reducers';

export default combineReducers({
  addNum,
  routing: routerReducer,
});
