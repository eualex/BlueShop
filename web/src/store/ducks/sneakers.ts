import { createActions, createReducer } from "reduxsauce";
import { AnyAction, Dispatch } from "redux";
 
import api from "../../services/api";

interface PropsImages {
  id: string;
  url: string;
}

export interface PropsSneakers {
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
  sneakersData: PropsSneakers[];
  error: string;
}

export const { Types, Creators } = createActions({
  fetchSneakersRequest: [],
  fetchSneakersSuccess: ["value_sneakers_success"],
  fetchSneakersFailure: ["value_sneakers_failure"],
});

export const getSneakers = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(Creators.fetchSneakersRequest());

    try {
      const res = await api.get("/sneakers");
      dispatch(Creators.fetchSneakersSuccess(res.data))
    } catch (err) {
      return console.log(err.response.data.message);
    }
  };
};

export const INICIAL_STATE: PropsState = {
  loading: false,
  sneakersData: [],
  error: "",
};

const request = (state = INICIAL_STATE) => ({
  ...state,
  loading: true,
});

const success = (
  state = INICIAL_STATE,
  { value_sneakers_success }: AnyAction
) => ({
  ...state,
  loading: false,
  sneakersData: value_sneakers_success,
  error: "",
});

const failure = (
  state = INICIAL_STATE,
  { value_sneakers_failure }: AnyAction
) => ({
  ...state,
  loading: false,
  sneakersData: [],
  error: value_sneakers_failure,
});

export default createReducer(INICIAL_STATE, {
  [Types.FETCH_SNEAKERS_REQUEST]: request,
  [Types.FETCH_SNEAKERS_SUCCESS]: success,
  [Types.FETCH_SNEAKERS_FAILURE]: failure,
});
