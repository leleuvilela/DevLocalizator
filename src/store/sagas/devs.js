import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as DevActions } from '../ducks/devs';

export function* addDev(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user}`);

    console.tron.log(action);

    const isDuplicated = yield select(state =>
      state.devs.data.find(dev => dev.id === data.id)
    );

    if (isDuplicated) {
      yield put(DevActions.addDevFailure('Duplicado'));
    } else {
      const userData = {
        id: data.id,
        name: data.name,
        login: data.login,
        avatar: data.avatar_url,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        url: data.html_url
      };

      yield put(DevActions.addDevSuccess(userData));
    }
  } catch (err) {
    yield put(DevActions.addDevFailure('Não encontrado'));
  }
}
