import { takeLatest, select, call, race, take, cancel } from 'redux-saga/effects';
// import { LOCATION_CHANGE } from 'react-router-redux';
import { ADD, add } from './actions';
import { selectNum } from './selectors';
import { getText } from '../../utils/fetch';

const addNum = function* () {
  const num = yield select(selectNum());
  yield call(getText);
};

const watchAddNum = function* () {
    yield takeLatest(ADD, addNum)
};

export default [
  watchAddNum,
];
