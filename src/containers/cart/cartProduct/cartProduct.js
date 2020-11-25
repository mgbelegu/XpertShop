import React, { Component } from "react";
import "./cartProduct.css";

class CartProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.productCount };

    this.inputNumberHandler = this.inputNumberHandler.bind(this);
  }

  inputNumberHandler(event) {
    this.setState({
      value: event.target.value,
    });
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
          <h4>{this.props.productTitle}</h4>
        </td>
        <td>
          <h4>ALL {this.props.productPrice}</h4>
        </td>
        <td>
          <input
            type="number"
            min="1"
            max="100"
            value={this.state.value}
            onChange={this.inputNumberHandler}
          ></input>
        </td>
      </tr>
    );
  }
}

export default CartProduct;
