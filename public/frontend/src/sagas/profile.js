import { call, put, select, fork, takeLatest } from 'redux-saga/effects';
import * as api from '../services/api';
import * as actions from '../ducks/profile';

function* fetch(action) {
  try {
    const res = yield call(api.GET, `profile`);
    if(res.error)
      console.log(res.error);
    else
      yield put(actions.successProfile(res));
  } catch (error) {
    console.log('Failed to fetch doc', error);
  }
}

function* create(action) {
  try {
    const res = yield call(api.POST, `profile`, action.profile);
    if(res.error)
      console.log(res.error);
    else
      yield put(actions.successProfile(res));
  } catch (error) {
    console.log('Failed to fetch doc', error);
  }

}

function* update(action) {
  try {
    console.log(action);
    delete action.profile['_id'];
    const res = yield call(api.PUT, `profile/${action.profile.id}`);
    if(res.error)
      console.log(res.error);
    else {
      let profile = action.profile;
      profile["_id"] = profile.id;
      yield put(actions.successProfile(profile));
    }

  } catch (error) {
    console.log('Failed to fetch doc', error);
  }

}

export function* watchFetch() {
  yield takeLatest(actions.FETCH, fetch);
}

export function* watchCreate() {
  yield takeLatest(actions.CREATE, create);
}

export function* watchUpdate() {
  yield takeLatest(actions.UPDATE, update);
}

export default function* rootSaga() {
  yield [
    fork(watchFetch),
    fork(watchCreate),
    fork(watchUpdate)
  ];
}