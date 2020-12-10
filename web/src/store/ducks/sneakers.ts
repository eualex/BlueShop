import { createActions, createReducer } from "reduxsauce";
import { AnyAction, Dispatch } from "redux";
 
import { handleGetSneakers } from "../../services/sneakers";
import { RootProduct } from '../../utils/product';

export interface PropsStateSneakers {
  sneakersLoading: boolean;
  sneakersData: RootProduct[];
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
      const sneakers = await handleGetSneakers();
      dispatch(Creators.fetchSneakersSuccess(sneakers))
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
