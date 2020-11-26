import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./cartProduct.css";

class CartProduct extends Component {
  state = {
    productCount: 1,
  };

  constructor(props) {
    super(props);
    this.productCountIncreaseHandler = this.productCountIncreaseHandler.bind(
      this
    );
    this.productCountDecreaseHandler = this.productCountDecreaseHandler.bind(
      this
    );
  }

  productCountIncreaseHandler() {
    this.setState({
      productCount: this.state.productCount + 1,
    });
  }

  productCountDecreaseHandler() {
    if (this.state.productCount !== 0) {
      this.setState({
        productCount: this.state.productCount - 1,
      });
    }
  }

  render() {
    return (
      <tr className="cartProduct">
        <td>
          <button className="deleteButton"></button>
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
          <h4>{this.props.productPrice} ALL</h4>
        </td>
        <td>
          <button onClick={this.productCountIncreaseHandler}>+</button>
          <p>{this.state.productCount}</p>
          <button onClick={this.productCountDecreaseHandler}>-</button>
        </td>
      </tr>
    );
  }
}

export default CartProduct;
