import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./cartProduct.css";
import axios from "axios";

class CartProduct extends Component {
  state = {
    id: this.props.productId,
    productCount: this.props.productCount,
    price: this.props.productPrice,
    value: this.props.productCount,
  };

  constructor(props) {
    super(props);
    this.productCountHandler = this.productCountHandler.bind(this);
  }

  productCountHandler(event) {
    this.setState({
      value: event.target.value,
    });
  }

  updateCountHandler = () => {
    axios
      .put(
        `https://xpert-ecommerce.firebaseio.com/orders/` +
          this.state.id +
          `/productCount` +
          `.json`,
        this.state.value
      )
      .then((response) => {
        this.setState({ loading: false, redirect: true });
        window.location.reload();
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  deleteHandler = () => {
    axios
      .put(
        `https://xpert-ecommerce.firebaseio.com/orders/` +
          this.state.id +
          `/productCount` +
          `.json`,
        "0"
      )
      .then((response) => {
        this.setState({ loading: false, redirect: true });
        window.location.reload();
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  render() {
    let price = this.state.price;
    let priceWithoutComma = parseFloat(price.replace(/,/g, ""));
    priceWithoutComma = priceWithoutComma * this.state.productCount;

    return (
      <tr className="cartProduct">
        <td>
          <button
            className="deleteButton"
            onClick={this.deleteHandler}
          ></button>
        </td>
        <td className="imageCell">
          <img src={this.props.productImage} alt="" />
        </td>
        <td className="productCell">
          <Link
            to={{
              pathname: `/products/${this.props.productId}`,
              state: this.props,
            }}
          >
            {this.props.productTitle}
          </Link>
        </td>
        <td>
          <h4>{Number(priceWithoutComma).toLocaleString()} ALL</h4>
        </td>
        <td>
          <input
            type="number"
            min="0"
            className="Counter"
            value={this.state.value}
            onChange={this.productCountHandler}
          ></input>
        </td>
        <td>
          <button className="countButton" onClick={this.updateCountHandler}>
            Përditëso sasinë
          </button>
        </td>
      </tr>
    );
  }
}

export default CartProduct;
