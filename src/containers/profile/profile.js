import React, { Component } from "react";
import { connect } from "react-redux";
import "./profile.css";
import Layout from "../layout/layout";
import LoginIcon from "../../assets/loginicon.png";
import { NavLink } from "react-router-dom";
import logoutIcon from "../../assets/Exit.svg";
import cartIcon from "../../assets/Shopping2.svg";
import ordersIcon from "../../assets/Porosite2.svg";

class Profile extends Component {
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
        <div className="profile">
          <div className="profileHeader">
            <h1>Mirë se vjen në profilin tënd personal!</h1>
            <a href="/XpertShop/logout">
              <img
                className="logoutIcon"
                src={logoutIcon}
                alt=""
                title="Dilni"
              />
            </a>
          </div>

          <div className="profileContainer">
            <div className="userInfo">
              <h3>Të dhënat personale:</h3>
              <p>Ju nuk keni asnjë të dhënë!</p>
            </div>
            <div className="userLinks">
              <h3>Të tjera:</h3>
              <div className="others">
                <NavLink to="/shporta">
                  <img
                    className="cartIcon"
                    src={cartIcon}
                    alt=""
                    title="Shkoni tek shporta."
                  />
                </NavLink>
                <NavLink to="/porosite">
                  <img
                    className="ordersIcon"
                    src={ordersIcon}
                    alt=""
                    title="Shkoni tek porositë."
                  />
                </NavLink>
              </div>
            </div>
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

export default connect(mapStateToProps)(Profile);
