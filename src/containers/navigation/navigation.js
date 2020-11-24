import React, { Component } from "react";
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
              <a href="/XpertShop/">
                <img className="navLogo" src={logo} alt="Xpert Shop Logo" />
              </a>
            </li>
          </ul>
          <NavLinks />
        </nav>
      </Aux>
    );
  }
}

export default Navigation;
