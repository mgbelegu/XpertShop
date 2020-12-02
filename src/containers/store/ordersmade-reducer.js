import * as actionTypes from "./actions/actiontypes";
import { updateObject } from "./utility";

const initialState = {
  ordersMade: [],
  loading: false,
};

const fetchOrdersMadeStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchOrdersMadeSuccess = (state, action) => {
  return updateObject(state, {
    ordersMade: action.ordersMade,
    loading: false,
  });
};

const fetchOrdersMadeFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDERSMADE_START:
      return fetchOrdersMadeStart(state, action);
    case actionTypes.FETCH_ORDERSMADE_SUCCESS:
      return fetchOrdersMadeSuccess(state, action);
    case actionTypes.FETCH_ORDERSMADE_FAIL:
      return fetchOrdersMadeFail(state, action);
    default:
      return state;
  }
};

export default reducer;
