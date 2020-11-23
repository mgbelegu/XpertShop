import React, { Component } from "react";
import "./categories.css";
import Layout from "../layout/layout";

class Categories extends Component {
  render() {
    return (
      <Layout>
        <div className="storeHeaderImage">
          <img src="http://via.placeholder.com/1920x800" alt="" />
        </div>

        <div className="categories">
          <div className="categoriesHeader">
            <h1>Kategorite</h1>
          </div>

          <div className="categoriesContainer">
            <div>
              <a href="/categories/woman">
                <img src="http://via.placeholder.com/150" alt="" />
              </a>
              <h3>Woman</h3>
            </div>
            <div>
              <a href="/categories/home">
                <img src="http://via.placeholder.com/150" alt="" />
              </a>
              <h3>Home</h3>
            </div>
            <div>
              <a href="/categories/electric">
                <img src="http://via.placeholder.com/150" alt="" />
              </a>
              <h3>Electric</h3>
            </div>
            <div>
              <a href="/categories/bike">
                <img src="http://via.placeholder.com/150" alt="" />
              </a>
              <h3>Bike</h3>
            </div>
            <div>
              <a href="/categories/food">
                <img src="http://via.placeholder.com/150" alt="" />
              </a>
              <h3>Food</h3>
            </div>
            <div>
              <a href="/categories/tech">
                <img src="http://via.placeholder.com/150" alt="" />
              </a>
              <h3>Tech</h3>
            </div>
          </div>

          <div className="categoriesContainer">
            <div>
              <a href="/categories/woman">
                <img src="http://via.placeholder.com/150" alt="" />
              </a>
              <h3>Books</h3>
            </div>
            <div>
              <a href="/categories/home">
                <img src="http://via.placeholder.com/150" alt="" />
              </a>
              <h3>Clothes</h3>
            </div>
            <div>
              <a href="/categories/electric">
                <img src="http://via.placeholder.com/150" alt="" />
              </a>
              <h3>Accessories</h3>
            </div>
            <div>
              <a href="/categories/bike">
                <img src="http://via.placeholder.com/150" alt="" />
              </a>
              <h3>Backpacks</h3>
            </div>
            <div>
              <a href="/categories/food">
                <img src="http://via.placeholder.com/150" alt="" />
              </a>
              <h3>Scooters</h3>
            </div>
            <div>
              <a href="/categories/tech">
                <img src="http://via.placeholder.com/150" alt="" />
              </a>
              <h3>Phones</h3>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Categories;
