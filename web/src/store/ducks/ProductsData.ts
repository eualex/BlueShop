import { createActions, createReducer } from "reduxsauce";
import { AnyAction, Dispatch } from "redux";

import api from "../../services/api";

interface PropsImages {
  id: string;
  url: string;
}

export interface PropsProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  genre: string;
  category: string;
  brand: string;
  design?: string;
  images: PropsImages[];
}

export interface PropsState {
  loading: boolean;
  data: PropsProduct[];
  error: string;
}

export const { Types, Creators } = createActions({
  fetchProductsRequest: [],
  fetchProductsSuccess: ["value_products_success"],
  fetchProductsFailure: ["value_products_failure"],
});

export const loadProducts = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(Creators.fetchProductsRequest());

    try {
      const res = await api.get("/products");
      dispatch(Creators.fetchProductsSuccess(res.data))
    } catch (err) {
      return console.log(err.response.data.message);
    }
  };
};

export const INICIAL_STATE: PropsState = {
  loading: false,
  data: [],
  error: "",
};

const request = (state = INICIAL_STATE) => ({
  ...state,
  loading: true,
});

const success = (
  state = INICIAL_STATE,
  { value_products_success }: AnyAction
) => ({
  ...state,
  loading: false,
  data: value_products_success,
  error: "",
});

const failure = (
  state = INICIAL_STATE,
  { value_products_failure }: AnyAction
) => ({
  ...state,
  loading: false,
  data: [],
  error: value_products_failure,
});

export default createReducer(INICIAL_STATE, {
  [Types.FETCH_PRODUCTS_REQUEST]: request,
  [Types.FETCH_PRODUCTS_SUCCESS]: success,
  [Types.FETCH_PRODUCTS_FAILURE]: failure,
});
