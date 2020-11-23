import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "../../../assets/home.png";
import PorosiIcon from "../../../assets/porosite.png";
import ProfiliIcon from "../../../assets/profili.png";
import ShoppingIcon from "../../../assets/shopping.png";

const navigationLinks = (props) => (
  <ul className={props.classes}>
    <li>
      <NavLink to="/" exact>
        <img className="navIcons" src={HomeIcon} alt="Home" />
      </NavLink>
    </li>
    <li>
      <NavLink to="/shporta">
        <img className="navIcons" src={ShoppingIcon} alt="Shporta" />
      </NavLink>
    </li>
    <li>
      <NavLink to="/porosite">
        <img className="navIcons" src={PorosiIcon} alt="Porosite" />
      </NavLink>
    </li>
    <li>
      <NavLink to="/profili">
        <img className="navIcons" src={ProfiliIcon} alt="Profili" />
      </NavLink>
    </li>
  </ul>
);

export default navigationLinks;
