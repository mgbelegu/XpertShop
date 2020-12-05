import axios from "axios";
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "./spinner/spinner";
import "./product.css";

class Product extends Component {
  state = {
    specifications: {
      ...this.props,
    },
    loading: false,
    redirect: false,
    redirectToPurchase: false,
  };

  addToCartHandler = () => {
    if (this.props.isAuthenticated) {
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
    } else {
      this.setState({
        redirect: true,
      });
    }
  };

  buyNowHandler = () => {
    if (this.props.isAuthenticated) {
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
    } else {
      this.setState({
        redirect: true,
      });
    }
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
          <button className="buyNow" onClick={this.buyNowHandler}>
            BLI TANI
          </button>
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

    let redirectBuyNow = null;
    if (this.state.redirectToPurchase) {
      redirectBuyNow = <Redirect to="/bli-tani/" />;
    }

    return (
      <div className="productContainer">
        {redirectCart}
        {redirectBuyNow}
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

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Product);
