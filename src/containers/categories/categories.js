import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./categories.css";
import Layout from "../layout/layout";
import bannerIMG from "../../assets/banner.svg";

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

          <div className="categoriesContainer">
            <div>
              <NavLink to="/categories/woman">
                <img src="http://via.placeholder.com/150" alt="" />
              </NavLink>
              <h3>Woman</h3>
            </div>
            <div>
              <NavLink to="/categories/home">
                <img src="http://via.placeholder.com/150" alt="" />
              </NavLink>
              <h3>Home</h3>
            </div>
            <div>
              <NavLink to="/categories/electric">
                <img src="http://via.placeholder.com/150" alt="" />
              </NavLink>
              <h3>Electric</h3>
            </div>
            <div>
              <NavLink to="/categories/bike">
                <img src="http://via.placeholder.com/150" alt="" />
              </NavLink>
              <h3>Bike</h3>
            </div>
            <div>
              <NavLink to="/categories/food">
                <img src="http://via.placeholder.com/150" alt="" />
              </NavLink>
              <h3>Food</h3>
            </div>
            <div>
              <NavLink to="/categories/tech">
                <img src="http://via.placeholder.com/150" alt="" />
              </NavLink>
              <h3>Tech</h3>
            </div>
          </div>

          <div className="categoriesContainer">
            <div>
              <NavLink to="/categories/woman">
                <img src="http://via.placeholder.com/150" alt="" />
              </NavLink>
              <h3>Books</h3>
            </div>
            <div>
              <NavLink to="/categories/home">
                <img src="http://via.placeholder.com/150" alt="" />
              </NavLink>
              <h3>Clothes</h3>
            </div>
            <div>
              <NavLink to="/categories/electric">
                <img src="http://via.placeholder.com/150" alt="" />
              </NavLink>
              <h3>Accessories</h3>
            </div>
            <div>
              <NavLink to="/categories/bike">
                <img src="http://via.placeholder.com/150" alt="" />
              </NavLink>
              <h3>Backpacks</h3>
            </div>
            <div>
              <NavLink to="/categories/food">
                <img src="http://via.placeholder.com/150" alt="" />
              </NavLink>
              <h3>Scooters</h3>
            </div>
            <div>
              <NavLink to="/categories/tech">
                <img src="http://via.placeholder.com/150" alt="" />
              </NavLink>
              <h3>Phones</h3>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Categories;
