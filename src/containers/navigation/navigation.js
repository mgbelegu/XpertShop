import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavLinks from "../navigation/navigationLink/navigationLinks";
import Aux from "../hoc/Auxiliary";
import logo from "../../assets/xpertshoplogo.svg";
import "./navigation.css";

class Navigation extends Component {
  render() {
    return (
      <Aux>
        <nav>
          <ul>
            <li>
              <NavLink to="/">
                <img className="navLogo" src={logo} alt="Xpert Shop Logo" />
              </NavLink>
            </li>
          </ul>
          <NavLinks />
        </nav>
      </Aux>
    );
  }
}

export default Navigation;
