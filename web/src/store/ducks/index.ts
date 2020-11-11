import { combineReducers } from 'redux';

import productsData, { PropsState } from './ProductsData';

export interface RootState {
  products: PropsState;
}

export default combineReducers({
  products: productsData,
})