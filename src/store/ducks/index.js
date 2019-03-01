import { combineReducers } from 'redux';

import favorites from './favorites';
import devs from './devs';
import modal from './modal';

export default combineReducers({
  favorites,
  devs,
  modal
});
