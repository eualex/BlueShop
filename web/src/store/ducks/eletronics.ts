import { createActions, createReducer } from 'reduxsauce';

import { AnyAction, Dispatch } from "redux";

import api from "../../services/api";

interface PropsImages {
  id: string;
  url: string;
}

// console.log(process.env.API);

export interface PropsEletronics {
  id: string;
  name: string;
  price: number;
  item: string;
  description: string;
  brand: string;
  images: PropsImages[];
}

export interface PropsStateEletronics {
  eletronicsLoading: boolean;
  eletronicsData: PropsEletronics[];
  eletronicsError: string;
}

export const { Types, Creators } = createActions({
  fetchEletronicsRequest: [],
  fetchEletronicsSuccess: ["value_eletronics_success"],
  fetchEletronicsFailure: ["value_eletronics_failure"],
});

export const getEletronics = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(Creators.fetchEletronicsRequest());

    try {
      const res = await api.get("/eletronics");
      dispatch(Creators.fetchEletronicsSuccess(res.data))
    } catch (err) {
      return console.log(err.response);
    }
  };
};

export const INICIAL_STATE: PropsStateEletronics = {
  eletronicsLoading: false,
  eletronicsData: [],
  eletronicsError: "",
};

const request = (state = INICIAL_STATE) => ({
  ...state,
  eletronicsLoading: true,
});

const success = (
  state = INICIAL_STATE,
  { value_eletronics_success }: AnyAction
) => ({
  ...state,
  eletronicsLoading: false,
  eletronicsData: value_eletronics_success,
  eletronicsError: "",
});

const failure = (
  state = INICIAL_STATE,
  { value_eletronics_failure }: AnyAction
) => ({
  ...state,
  eletronicsLoading: false,
  eletronicsData: [],
  eletronicsError: value_eletronics_failure,
});

export default createReducer(INICIAL_STATE, {
  [Types.FETCH_ELETRONICS_REQUEST]: request,
  [Types.FETCH_ELETRONICS_SUCCESS]: success,
  [Types.FETCH_ELETRONICS_FAILURE]: failure,
});
