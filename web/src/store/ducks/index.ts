import { combineReducers } from 'redux';

import sneakers, { PropsStateSneakers } from './sneakers';
import eletronics, { PropsStateEletronics } from './eletronics';
import products, { PropsProductsState } from './products';

export interface RootState {
  sneakers: PropsStateSneakers;
  eletronics: PropsStateEletronics;
  products: PropsProductsState;
}

export default combineReducers({
  sneakers,
  eletronics,
  products
})