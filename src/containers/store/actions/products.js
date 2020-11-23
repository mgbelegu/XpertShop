import * as actionTypes from "./actiontypes";
import axios from "../../../axios-products";

export const fetchProductsSuccess = (products) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    products: products,
  };
};

export const fetchProductsFail = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAIL,
    error: error,
  };
};

export const fetchProductsStart = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_START,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsStart());
    axios
      .get("/products.json")
      .then((res) => {
        const fetchProducts = [];
        for (let key in res.data) {
          fetchProducts.push({
            ...res.data[key],
            id: key,
          });
        }
        dispatch(fetchProductsSuccess(fetchProducts));
      })
      .catch((err) => {
        dispatch(fetchProductsFail(err));
      });
  };
};
