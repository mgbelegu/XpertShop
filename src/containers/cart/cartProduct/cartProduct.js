import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./cartProduct.css";

class CartProduct extends Component {
  state = {
    productCount: 1,
    price: this.props.productPrice,
  };

  /*constructor(props) {
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
  }*/

  render() {
    let price = this.state.price;
    let priceWithoutComma = parseFloat(price.replace(/,/g, ""));
    priceWithoutComma = priceWithoutComma * this.state.productCount;

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
          <h4>{Number(priceWithoutComma).toLocaleString()} ALL</h4>
        </td>
      </tr>
    );
  }
}

export default CartProduct;

/*
Count row code:
<td>
          <button
            className="countButton"
            onClick={this.productCountIncreaseHandler}
          >
            +
          </button>
          <p className="Counter">{this.state.productCount}</p>
          <button
            className="countButton"
            onClick={this.productCountDecreaseHandler}
          >
            -
          </button>
        </td>
*/
