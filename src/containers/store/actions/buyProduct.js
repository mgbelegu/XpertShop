import * as actionTypes from "./actiontypes";
import axios from "../../../axios-orders";

export const fetchBuyProductSuccess = (buyProduct) => {
  return {
    type: actionTypes.FETCH_BUYPRODUCT_SUCCESS,
    buyProduct: buyProduct,
  };
};

export const fetchBuyProductFail = (error) => {
  return {
    type: actionTypes.FETCH_BUYPRODUCT_FAIL,
    error: error,
  };
};

export const fetchBuyProductStart = () => {
  return {
    type: actionTypes.FETCH_BUYPRODUCT_START,
  };
};

export const fetchBuyProduct = () => {
  return (dispatch) => {
    dispatch(fetchBuyProductStart());
    axios
      .get("/purchasing.json")
      .then((res) => {
        const fetchBuyProduct = [];
        for (let key in res.data) {
          fetchBuyProduct.push({
            ...res.data[key],
            id: key,
          });
        }
        dispatch(fetchBuyProductSuccess(fetchBuyProduct));
      })
      .catch((err) => {
        dispatch(fetchBuyProductFail(err));
      });
  };
};
