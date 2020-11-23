import React from "react";
import HomeIcon from "../../../assets/home.png";
import PorosiIcon from "../../../assets/porosite.png";
import ProfiliIcon from "../../../assets/profili.png";
import ShoppingIcon from "../../../assets/shopping.png";

const navigationLinks = (props) => (
  <ul className={props.classes}>
    <li>
      <a href="/">
        <img className="navIcons" src={HomeIcon} alt="Home" />
      </a>
    </li>
    <li>
      <a href="/shporta">
        <img className="navIcons" src={ShoppingIcon} alt="Shporta" />
      </a>
    </li>
    <li>
      <a href="/porosite">
        <img className="navIcons" src={PorosiIcon} alt="Porosite" />
      </a>
    </li>
    <li>
      <a href="/profili">
        <img className="navIcons" src={ProfiliIcon} alt="Profili" />
      </a>
    </li>
  </ul>
);

export default navigationLinks;
