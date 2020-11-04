import { createActions, createReducer } from 'reduxsauce';
import { AnyAction } from 'redux';

// interface Product {
//   name: string;
//   price: number;
//   genre: string;
//   category: string;
//   brand: string;
//   design: string;
// }

export const { Types, Creators } = createActions({
  addProductsData: ["value_products_data"]
});

export const INICIAL_STATE = {
  data: []
}

const ProductsData = (state=INICIAL_STATE, { value_products_data }: AnyAction ) => ({
  ...state,
  data: value_products_data
})

export default createReducer(INICIAL_STATE, {
  [Types.ADD_PRODUCTS_DATA]: ProductsData
})