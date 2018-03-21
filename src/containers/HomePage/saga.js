import { takeEvery, select, call } from 'redux-saga/effects';
import { ADD, add } from './actions';
import { selectNum } from './selectors';
import { getText } from '../../utils/fetch';

const addNum = function* () {
  const num = yield select(selectNum());
  yield call(getText);
};

const watchAddNum = function* () {
  yield takeEvery(ADD, addNum);
};

export default [
  watchAddNum,
];
