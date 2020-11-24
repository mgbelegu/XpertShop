import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "../../../assets/Home.svg";
import PorosiIcon from "../../../assets/Porosite.svg";
import ProfiliIcon from "../../../assets/Profili.svg";
import ShoppingIcon from "../../../assets/Shopping.svg";
import { connect } from "react-redux";

class navigationLinks extends Component {
  render() {
    return (
      <ul className={this.props.classes}>
        <li className="homeLink">
          <a href="/XpertShop/">
            <img className="navIcons" src={HomeIcon} alt="Home" />
          </a>
        </li>
        {this.props.isAuthenticated ? (
          <li className="cartLink">
            <NavLink to="/shporta">
              <img className="navIcons" src={ShoppingIcon} alt="Shporta" />
            </NavLink>
          </li>
        ) : null}
        {this.props.isAuthenticated ? (
          <li className="ordersLink">
            <NavLink to="/porosite">
              <img className="navIcons" src={PorosiIcon} alt="Porosite" />
            </NavLink>
          </li>
        ) : null}
        <li>
          <NavLink to="/profili">
            <img className="navIcons" src={ProfiliIcon} alt="Profili" />
          </NavLink>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(navigationLinks);
