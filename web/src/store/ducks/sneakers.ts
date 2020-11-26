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
  Sgenre: string;
  brand: string;
  Sdesign?: string;
  images: PropsImages[];
}

export interface PropsStateSneakers {
  sneakersLoading: boolean;
  sneakersData: PropsSneakers[];
  sneakersError: string;
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

export const INICIAL_STATE: PropsStateSneakers = {
  sneakersLoading: false,
  sneakersData: [],
  sneakersError: "",
};

const request = (state = INICIAL_STATE) => ({
  ...state,
  sneakersLoading: true,
});

const success = (
  state = INICIAL_STATE,
  { value_sneakers_success }: AnyAction
) => ({
  ...state,
  sneakersLoading: false,
  sneakersData: value_sneakers_success,
  sneakersError: "",
});

const failure = (
  state = INICIAL_STATE,
  { value_sneakers_failure }: AnyAction
) => ({
  ...state,
  sneakersLoading: false,
  sneakersData: [],
  sneakersError: value_sneakers_failure,
});

export default createReducer(INICIAL_STATE, {
  [Types.FETCH_SNEAKERS_REQUEST]: request,
  [Types.FETCH_SNEAKERS_SUCCESS]: success,
  [Types.FETCH_SNEAKERS_FAILURE]: failure,
});
