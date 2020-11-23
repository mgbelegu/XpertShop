import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "../../../assets/home.png";
import PorosiIcon from "../../../assets/porosite.png";
import ProfiliIcon from "../../../assets/profili.png";
import ShoppingIcon from "../../../assets/shopping.png";
import { connect } from "react-redux";

class navigationLinks extends Component {
  render() {
    return (
      <ul className={this.props.classes}>
        <li>
          <NavLink to="/" exact>
            <img className="navIcons" src={HomeIcon} alt="Home" />
          </NavLink>
        </li>
        {this.props.isAuthenticated ? (
          <li>
            <NavLink to="/shporta">
              <img className="navIcons" src={ShoppingIcon} alt="Shporta" />
            </NavLink>
          </li>
        ) : null}
        {this.props.isAuthenticated ? (
          <li>
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
