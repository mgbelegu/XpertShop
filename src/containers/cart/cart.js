import React, { Component } from "react";
import { connect } from "react-redux";
import "./cart.css";
import Layout from "../layout/layout";
import LoginIcon from "../../assets/loginicon.png";
import { NavLink } from "react-router-dom";
import Logout from "../logout/logout";

class Cart extends Component {
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

    if (this.props.isAuthenticated) {
      cartAuthenticated = (
        <div className="cart">
          <div className="cartHeader">
            <h1>Shporta juaj</h1>
            <a href="/logout">Dilni</a>
          </div>

          <div className="cartContainer">
            <h3>Produktet:</h3>
            <p>Shporta juaj eshte bosh!</p>
            <button>Checkout</button>
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
  };
};

export default connect(mapStateToProps)(Cart);
