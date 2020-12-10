import { createActions, createReducer } from 'reduxsauce';

import { AnyAction, Dispatch } from "redux";

import { handleGetProducts } from "../../services/products";
import { ProductProps } from '../../utils/product';

export interface PropsProductsState {
  ProductsLoading: boolean;
  ProductsData: ProductProps[];
  ProductsError: string;
}

export const { Types, Creators } = createActions({
  fetchProductsRequest: [],
  fetchProductsSuccess: ["value_products_success"],
  fetchProductsFailure: ["value_products_failure"],
});

export const getProducts = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(Creators.fetchProductsRequest());
    
    try {
      const products = await handleGetProducts();
      dispatch(Creators.fetchProductsSuccess(products));
    } catch (err) {
      return console.log(err.response);
    }
  };
};

export const INICIAL_STATE: PropsProductsState = {
  ProductsLoading: false,
  ProductsData: [],
  ProductsError: "",
};

const request = (state = INICIAL_STATE) => ({
  ...state,
  ProductsLoading: true,
});

const success = (
  state = INICIAL_STATE,
  { value_products_success }: AnyAction
) => ({
  ...state,
  ProductsLoading: false,
  ProductsData: value_products_success,
  ProductsError: "",
});

const failure = (
  state = INICIAL_STATE,
  { value_products_failure }: AnyAction
) => ({
  ...state,
  ProductsLoading: false,
  ProductsData: [],
  ProductsError: value_products_failure,
});

export default createReducer(INICIAL_STATE, {
  [Types.FETCH_PRODUCTS_REQUEST]: request,
  [Types.FETCH_PRODUCTS_SUCCESS]: success,
  [Types.FETCH_PRODUCTS_FAILURE]: failure,
});
