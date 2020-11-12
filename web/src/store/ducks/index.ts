import { combineReducers } from 'redux';

import sneakers, { PropsState } from './sneakers';

export interface RootState {
  sneakers: PropsState;
}

export default combineReducers({
  sneakers,
})