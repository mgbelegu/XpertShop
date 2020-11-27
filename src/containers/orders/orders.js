import React, { Component } from "react";
import { connect } from "react-redux";
import "./orders.css";
import Layout from "../layout/layout";
import LoginIcon from "../../assets/loginicon.png";
import { NavLink } from "react-router-dom";

class Orders extends Component {
  render() {
    let Authenticated = (
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
      Authenticated = (
        <div className="orders">
          <div className="ordersHeader">
            <h1>Porositë e juaja</h1>
          </div>

          <div className="ordersContainer">
            <h3>Porositë:</h3>
            <p>Ju nuk keni asnjë porosi!</p>
          </div>
        </div>
      );
    }

    return <Layout>{Authenticated}</Layout>;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Orders);
