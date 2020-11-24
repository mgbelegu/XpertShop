import React from "react";
import Logo from "../../assets/xpertshoplogo.svg";
import "./footer.css";
import { NavLink } from "react-router-dom";

const footer = (props) => {
  return (
    <footer>
      <div className="firstRow">
        <div>
          <img src={Logo} alt="" />
          <p>
            <i className="fa fa-envelope-o"></i>
            <a href="mailto:info@xpertsystems.al">
              Email: info@xpertsystems.al
            </a>
          </p>
          <p>
            <i className="fa fa-fax"></i>
            <a href="tel:+35542333444">Tel/Fax: +355 42 333 444</a>
          </p>
          <p>
            <i className="fa fa-phone"></i>
            <a href="tel:+35542333555">Service: +355 42 333 555</a>
          </p>
          <p>
            <i className="fa fa-phone"></i>
            <a href="tel:+355688011707">Mobile: +355 68 80 11 707</a>
          </p>
        </div>
        <div className="navDiv">
          <h3 className="navH3">Navigation</h3>
          <NavLink to="/" exact>
            Shop
          </NavLink>
          <NavLink to="/shporta">Shporta</NavLink>
          <NavLink to="/porosite">Porosite</NavLink>
          <NavLink to="/profili">Profili</NavLink>
        </div>
        <div className="socialDiv">
          <h3 className="socialH3">Social Media</h3>
          <div className="socialContainer">
            <a
              href="https://www.facebook.com/XpertCS/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/xpert_systems/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com/xpertsystems"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/xpert-systems-shpk/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="secondRow">
        <p>
          Copyright &copy;
          {new Date().getFullYear()} All rights reserved |{" "}
          <a href="https://xpert.al" target="_blank">
            Xpert Systems
          </a>
        </p>
      </div>
    </footer>
  );
};

export default footer;
