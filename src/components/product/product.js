import axios from "axios";
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./product.css";

class Product extends Component {
  state = {
    specifications: {
      ...this.props,
    },
    loading: false,
    redirect: false,
  };

  addToCartHandler = () => {
    this.setState({
      loading: true,
    });
    let productCartSpecifications = {};
    productCartSpecifications = this.state.specifications;
    axios
      .post(
        "https://xpert-ecommerce.firebaseio.com/orders.json",
        productCartSpecifications
      )
      .then((response) => {
        this.setState({ loading: false, redirect: true });
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  render() {
    let productButtons = (
      <div className="buttonDiv">
        <button onClick={this.addToCartHandler}>SHTO NË SHPORTË</button>
        <button className="buyNow">BLI TANI</button>
      </div>
    );

    if (this.state.loading) {
      productButtons = (
        <p style={{ textAlign: "center" }}>Po shtohet në shportë...</p>
      );
    }

    let redirectCart = null;
    if (this.state.redirect) {
      redirectCart = <Redirect to="/shporta" />;
    }
    return (
      <div className="productContainer">
        {redirectCart}
        <div>
          <img src={this.props.productImage} alt="" />
          <Link
            to={{
              pathname: `/products/${this.state.specifications.productId}`,
              state: this.state.specifications,
            }}
          >
            {this.props.productTitle}
          </Link>
          <p>{this.props.productDescription}</p>
          <p className="price">
            {Number(this.props.productPrice).toLocaleString()} ALL
          </p>
          {productButtons}
        </div>
      </div>
    );
  }
}

export default Product;
