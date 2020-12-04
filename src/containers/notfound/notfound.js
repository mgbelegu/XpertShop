import React from "react";
import { NavLink } from "react-router-dom";
import "./notfound.css";
import notfoundImg from "../../assets/404.svg";

const notfound = () => {
  return (
    <div className="NotFound">
      <h1>404 FAQJA NUK EKZISTON </h1>
      <img src={notfoundImg} alt="" />
      <NavLink to="/">
        <h2>SHKONI TEK FAQJA KRYESORE.</h2>
      </NavLink>
    </div>
  );
};

export default notfound;
