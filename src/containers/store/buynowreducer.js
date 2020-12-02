import * as actionTypes from "./actions/actiontypes";
import { updateObject } from "./utility";

const initialState = {
  buyProduct: [],
  loading: false,
};

const fetchbuyProductStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchbuyProductSuccess = (state, action) => {
  return updateObject(state, {
    buyProduct: action.buyProduct,
    loading: false,
  });
};

const fetchbuyProductFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BUYPRODUCT_START:
      return fetchbuyProductStart(state, action);
    case actionTypes.FETCH_BUYPRODUCT_SUCCESS:
      return fetchbuyProductSuccess(state, action);
    case actionTypes.FETCH_BUYPRODUCT_FAIL:
      return fetchbuyProductFail(state, action);
    default:
      return state;
  }
};

export default reducer;
