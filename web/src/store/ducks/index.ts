import { combineReducers } from 'redux';

import productsData from './ProductsData';

export default combineReducers({
  products: productsData,
})