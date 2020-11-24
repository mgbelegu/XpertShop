import React, { Component } from "react";
import { connect } from "react-redux";
import "./profile.css";
import Layout from "../layout/layout";
import LoginIcon from "../../assets/loginicon.png";
import { NavLink } from "react-router-dom";

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
            <a href="/logout">Dilni</a>
          </div>

          <div className="profileContainer">
            <h3>Të dhënat personale:</h3>
            <p>Ju nuk keni asnjë të dhënë!</p>
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