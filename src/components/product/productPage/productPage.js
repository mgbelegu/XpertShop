import React, { Component } from "react";
import "./productPage.css";

class ProductPage extends Component {
  state = {
    ...this.props.location.state,
  };
  render() {
    return (
      <div className="productPage">
        <div className="productImageSection">
          <img src={this.state.productImage} alt="" />
        </div>
        <div className="productInfoSection">
          <div>
            <h1>{this.state.productTitle}</h1>
            <h2>{this.state.productPrice} ALL</h2>
            <p>{this.state.productDescription}</p>
          </div>

          <div className="buttonContainer">
            <button>SHTO NË SHPORTË</button>
            <button className="buyNow">BLI TANI</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
