import * as actionTypes from "./actiontypes";
import axios from "../../../axios-orders";

export const fetchOrdersMadeSuccess = (ordersMade) => {
  return {
    type: actionTypes.FETCH_ORDERSMADE_SUCCESS,
    ordersMade: ordersMade,
  };
};

export const fetchOrdersMadeFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERSMADE_FAIL,
    error: error,
  };
};

export const fetchOrdersMadeStart = () => {
  return {
    type: actionTypes.FETCH_ORDERSMADE_START,
  };
};

export const fetchOrdersMade = () => {
  return (dispatch) => {
    dispatch(fetchOrdersMadeStart());
    axios
      .get("/ordersmade.json")
      .then((res) => {
        const fetchOrdersMade = [];
        for (let key in res.data) {
          fetchOrdersMade.push({
            ...res.data[key],
            id: key,
          });
        }
        dispatch(fetchOrdersMadeSuccess(fetchOrdersMade));
      })
      .catch((err) => {
        dispatch(fetchOrdersMadeFail(err));
      });
  };
};
