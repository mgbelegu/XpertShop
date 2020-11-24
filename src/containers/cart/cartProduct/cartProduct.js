import React, { Component } from "react";
import "./cartProduct.css";

class CartProduct extends Component {
  render() {
    return (
      <div className="cartProduct">
        <button className="deleteButton"></button>
        <div className="cartProductImage">
          <img src="http://via.placeholder.com/150" alt="" />
        </div>
        <div className="cartProductInfo">
          <h2>Product</h2>
          <p>
            Product info info info info info info info info info info info info
            info info info info info info info info info info
          </p>
          <h3>ALL 2900</h3>
        </div>
        <div className="cartProductSum">
          <label>Sasia</label>
          <input type="number" min="1" max="100"></input>
        </div>
      </div>
    );
  }
}

export default CartProduct;
