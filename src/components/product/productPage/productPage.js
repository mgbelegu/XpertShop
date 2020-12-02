import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Spinner from "../spinner/spinner";
import "./productPage.css";

class ProductPage extends Component {
  state = {
    propsState: {
      ...this.props.location.state,
    },
    loading: false,
    redirect: false,
    redirectToPurchase: false,
  };

  buyNowHandler = () => {
    this.setState({
      loading: true,
    });
    let productCartSpecifications = {};
    let price = this.state.propsState.productPrice;
    if (typeof price != "number") {
      price = parseFloat(price.replace(/,/g, ""));
    }
    productCartSpecifications = {
      ...this.state.propsState,
      productPrice: price,
      productCount: 1,
    };
    axios
      .put(
        `https://xpert-ecommerce.firebaseio.com/purchasing/` +
          productCartSpecifications.productId +
          `.json`,
        productCartSpecifications
      )
      .then((response) => {
        this.setState({ loading: false, redirectToPurchase: true });
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  addToCartHandler = () => {
    this.setState({
      loading: true,
    });
    let productSpecifications = {};
    let price = this.state.propsState.productPrice;
    if (typeof price != "number") {
      price = parseFloat(price.replace(/,/g, ""));
    }
    productSpecifications = {
      ...this.state.propsState,
      productPrice: price,
      productCount: 1,
    };
    axios
      .put(
        `https://xpert-ecommerce.firebaseio.com/orders/` +
          productSpecifications.productId +
          `.json`,
        productSpecifications
      )
      .then((response) => {
        this.setState({ loading: false, redirect: true });
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  render() {
    let redirectCart = null;
    if (this.state.redirect) {
      redirectCart = <Redirect to="/shporta" />;
    }
    let productButtons = (
      <div className="buttonContainer">
        <button onClick={this.addToCartHandler}>SHTO NË SHPORTË</button>
        <button className="buyNow" onClick={this.buyNowHandler}>
          BLI TANI
        </button>
      </div>
    );

    if (this.state.loading) {
      productButtons = <Spinner />;
    }

    let redirectBuyNow = null;
    if (this.state.redirectToPurchase) {
      redirectBuyNow = <Redirect to="/bli-tani" />;
    }

    return (
      <div className="productPage">
        {redirectBuyNow}
        {redirectCart}
        <div className="productImageSection">
          <img src={this.state.propsState.productImage} alt="" />
        </div>
        <div className="productInfoSection">
          <div>
            <h1>{this.state.propsState.productTitle}</h1>
            <h2>
              {typeof this.state.propsState.productPrice == "number"
                ? Number(this.state.propsState.productPrice).toLocaleString()
                : this.state.propsState.productPrice}{" "}
              ALL
            </h2>
            <p>{this.state.propsState.productDescription}</p>
          </div>
          {productButtons}
        </div>
      </div>
    );
  }
}

export default ProductPage;
