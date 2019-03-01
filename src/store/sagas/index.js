import { all, takeLatest } from 'redux-saga/effects';

import { Types as FavoriteTypes } from '../ducks/favorites';
import { Types as DevTypes } from '../ducks/devs';
import { addFavorite } from './favorites';
import { addDev } from './devs';

export default function* rootSaga() {
  yield all([
    takeLatest(FavoriteTypes.ADD_REQUEST, addFavorite),
    takeLatest(DevTypes.ADD_REQUEST, addDev)
  ]);
}
