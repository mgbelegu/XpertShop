import axios from "axios";
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Spinner from "./spinner/spinner";
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
    productCartSpecifications = {
      ...this.state.specifications,
      productCount: 1,
    };
    axios
      .put(
        `https://xpert-ecommerce.firebaseio.com/orders/` +
          productCartSpecifications.productId +
          `.json`,
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
        <div>
          <p className="price">
            {Number(this.props.productPrice).toLocaleString()} ALL
          </p>
        </div>

        <div>
          <button onClick={this.addToCartHandler}>SHTO NË SHPORTË</button>
          <button className="buyNow">BLI TANI</button>
        </div>
      </div>
    );

    if (this.state.loading) {
      productButtons = <Spinner />;
    }

    let redirectCart = null;
    if (this.state.redirect) {
      redirectCart = <Redirect to="/shporta" />;
    }

    return (
      <div className="productContainer">
        {redirectCart}
        <Link
          to={{
            pathname: `/products/${this.state.specifications.productId}`,
            state: {
              productId: this.state.specifications.productId,
              productTitle: this.state.specifications.productTitle,
              productImage: this.state.specifications.productImage,
              productDescription: this.state.specifications.productDescription,
              productPrice: this.state.specifications.productPrice,
            },
          }}
        >
          {" "}
          <img src={this.props.productImage} alt="" />
        </Link>

        <Link
          to={{
            pathname: `/products/${this.state.specifications.productId}`,
            state: {
              productId: this.state.specifications.productId,
              productTitle: this.state.specifications.productTitle,
              productImage: this.state.specifications.productImage,
              productDescription: this.state.specifications.productDescription,
              productPrice: this.state.specifications.productPrice,
            },
          }}
        >
          {this.props.productTitle}
        </Link>
        <p>{this.props.productDescription}</p>
        {productButtons}
      </div>
    );
  }
}

export default Product;
