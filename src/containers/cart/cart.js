import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";
import "./cart.css";
import Layout from "../layout/layout";
import LoginIcon from "../../assets/loginicon.png";
import { NavLink } from "react-router-dom";
import CartProduct from "./cartProduct/cartProduct";
import Spinner from "../ui/spinner/spinner";

class Cart extends Component {
  componentDidMount() {
    this.props.onFetchOrders();
  }

  render() {
    let cartAuthenticated = (
      <div className="notLoggedIn">
        <h2>Ju nuk jeni kyçur akoma!</h2>
        <p>
          <NavLink to="/kycu">Kyçuni</NavLink> ose{" "}
          <NavLink to="/regjistrohu">krijoni</NavLink> një llogari për të
          vazhduar më tutje.
        </p>
        <img src={LoginIcon} alt="" />
      </div>
    );

    let total = 0;
    this.props.orders.map(
      (orderItem, i) => (total = total + orderItem.productPrice)
    );

    let showCart = (
      <tr>
        <td
          style={{ width: "100%", margin: "0 auto !important" }}
          colSpan="100%"
        >
          <Spinner />
        </td>
      </tr>
    );

    if (!this.props.orders.loading) {
      let cartProductList = this.props.orders.map((orderItem, i) => (
        <CartProduct
          key={i}
          productImage={orderItem.productImage}
          productTitle={orderItem.productTitle}
          productPrice={Number(orderItem.productPrice).toLocaleString()}
          productId={orderItem.productId}
        />
      ));

      if (cartProductList != "") {
        showCart = cartProductList;
      } else {
        showCart = (
          <tr>
            <td colSpan="100%" style={{ padding: "30px" }}>
              Shporta juaj është bosh!
            </td>
          </tr>
        );
      }
    }

    if (this.props.isAuthenticated) {
      cartAuthenticated = (
        <div className="cart">
          <div className="cartHeader">
            <h1>Shporta juaj</h1>
          </div>

          <div className="cartContainer">
            <h3>Produktet:</h3>
            <table id="cart">
              <tbody>
                <tr>
                  <th id="delTH"></th>
                  <th id="imageTH"></th>
                  <th className="productCell">
                    <h4>Produkti</h4>
                  </th>
                  <th id="priceTH">Cmimi</th>
                </tr>
                {showCart}
              </tbody>
            </table>

            <div className="cartTotal">
              <h4>Totali: </h4>
              <h4>{Number(total).toLocaleString()} ALL</h4>
            </div>
            <button className="checkoutButton">Bëje porosinë</button>
          </div>
        </div>
      );
    }

    return <Layout>{cartAuthenticated}</Layout>;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    orders: state.orders.orders,
    loading: state.orders.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

/*
Count Row Code:
 <th id="countTH">Sasia</th>
*/
