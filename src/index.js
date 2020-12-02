import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import ScrollToTop from "./containers/hoc/ScrollToTop";
import reportWebVitals from "./reportWebVitals";
import productReducer from "./containers/store/products";
import orderReducer from "./containers/store/orders-reducer";
import authReducer from "./containers/store/authreducer";
import ordersMadeReducer from "./containers/store/ordersmade-reducer";
import buyNowReducer from "./containers/store/buynowreducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  orders: orderReducer,
  products: productReducer,
  auth: authReducer,
  ordersMade: ordersMadeReducer,
  buyNow: buyNowReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>{app}</React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
