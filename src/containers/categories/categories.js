import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./categories.css";
import Layout from "../layout/layout";
import bannerIMG from "../../assets/banner.svg";
import pc from "../../assets/pc/Computer-&-Laptop-Bardhe.png";
import monitor from "../../assets/monitor/TV-&-Monitor-Bardhe.png";
import printer from "../../assets/printer/Copier-Printer-Scanner-Bardhe.png";
import phones from "../../assets/phones/Phone-Bardhe.png";
import hardware from "../../assets/hardware/Hardware-Equipments-Bardhe.png";
import network from "../../assets/network/Network-Equipments-Bardhe.png";
import peripherals from "../../assets/peripherals/Peripherals-Accessories-Bardhe.png";
import software from "../../assets/software/Software-Bardhe.png";
import security from "../../assets/security/Security-System-Bardhe.png";
import battery from "../../assets/ups/UPS-&-Battery-Bardhe.png";

class Categories extends Component {
  render() {
    return (
      <Layout>
        <div className="storeHeaderImage">
          <img src={bannerIMG} alt="" />
        </div>

        <div className="categories">
          <div className="categoriesHeader">
            <h1>Kategorite</h1>
          </div>

          <div className="categoriesContainer row d-flex justify-content-center">
            <div className="col-md-2" id="pcCategory">
              <NavLink to="/categories/computers">
                <img className="img-fluid" src={pc} alt="" />
                <h4 className="text-center">Computer & Laptops</h4>
              </NavLink>
            </div>

            <div className="col-md-2">
              <NavLink to="/categories/monitors">
                <img className="img-fluid" src={monitor} alt="" />
                <h4 className="text-center">TV & Monitors</h4>
              </NavLink>
            </div>

            <div className="col-md-2">
              <NavLink to="/categories/printers">
                <img className="img-fluid" src={printer} alt="" />
                <h4 className="text-center">Copier, Printers & Scanners</h4>
              </NavLink>
            </div>

            <div className="col-md-2">
              <NavLink to="/categories/phones">
                <img className="img-fluid" src={phones} alt="" />
                <h4 className="text-center">Phones</h4>
              </NavLink>
            </div>

            <div className="col-md-2">
              <NavLink to="/categories/hardware">
                <img className="img-fluid" src={hardware} alt="" />
                <h4 className="text-center">Hardware equipments</h4>
              </NavLink>
            </div>
          </div>

          <div className="categoriesContainer row d-flex justify-content-center">
            <div className="col-md-2" id="pcCategory">
              <NavLink to="/categories/network">
                <img className="img-fluid" src={network} alt="" />
                <h4 className="text-center">Network equipments</h4>
              </NavLink>
            </div>

            <div className="col-md-2">
              <NavLink to="/categories/peripherals">
                <img className="img-fluid" src={peripherals} alt="" />
                <h4 className="text-center">Peripherals Accessories</h4>
              </NavLink>
            </div>

            <div className="col-md-2">
              <NavLink to="/categories/software">
                <img className="img-fluid" src={software} alt="" />
                <h4 className="text-center">Software</h4>
              </NavLink>
            </div>

            <div className="col-md-2">
              <NavLink to="/categories/security">
                <img className="img-fluid" src={security} alt="" />
                <h4 className="text-center">Security Systems</h4>
              </NavLink>
            </div>

            <div className="col-md-2">
              <NavLink to="/categories/battery">
                <img className="img-fluid" src={battery} alt="" />
                <h4 className="text-center">UPS & Battery</h4>
              </NavLink>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Categories;
