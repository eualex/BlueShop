import { combineReducers } from 'redux';

import sneakers, { PropsStateSneakers } from './sneakers';
import eletronics, { PropsStateEletronics } from './eletronics';

export interface RootState {
  sneakers: PropsStateSneakers;
  eletronics: PropsStateEletronics;
}

export default combineReducers({
  sneakers,
  eletronics,
})