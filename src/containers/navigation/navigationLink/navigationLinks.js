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
          <NavLink to="/">
            <img className="navIcons" src={HomeIcon} alt="Home" />
            <p>Home</p>
          </NavLink>
        </li>
        {this.props.isAuthenticated ? (
          <li className="cartLink">
            <NavLink to="/shporta">
              <img className="navIcons" src={ShoppingIcon} alt="Shporta" />
              <p>Shporta</p>
            </NavLink>
          </li>
        ) : null}
        {this.props.isAuthenticated ? (
          <li className="ordersLink">
            <NavLink to="/porosite">
              <img className="navIcons" src={PorosiIcon} alt="Porosite" />
              <p>Porosite</p>
            </NavLink>
          </li>
        ) : null}
        <li>
          <NavLink to="/llogaria">
            <img className="navIcons" src={ProfiliIcon} alt="Profili" />
            <p>Profili</p>
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
