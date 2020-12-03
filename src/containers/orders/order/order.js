import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./order.css";

class Order extends Component {
  state = {
    products: this.props.products,
    userinfo: this.props.userinfo,
    dateofpurchase: this.props.date,
    total: this.props.total,
    status: this.props.state,
  };

  render() {
    let stateValue = null;
    switch (this.props.state) {
      case "Pending":
        stateValue = (
          <td className="pending">
            <p>{this.props.state}</p>
          </td>
        );
        break;
      case "Denied":
        stateValue = (
          <td className="denied">
            <p>{this.props.state}</p>
          </td>
        );
        break;
      case "Approved":
        stateValue = (
          <td className="approved">
            <p>{this.props.state}</p>
          </td>
        );
        break;
      case "Delivered":
        stateValue = (
          <td className="delivered">
            <p>{this.props.state}</p>
          </td>
        );
        break;
      default:
        stateValue = <td>No price</td>;
    }

    return (
      <tr>
        <td>
          <Link
            className="orderMadeLink"
            to={{
              pathname: `/porosite/${this.props.id}`,
              state: this.state,
            }}
          >
            {this.props.id}
          </Link>
        </td>
        <td>
          <p>{Number(this.props.total).toLocaleString()} ALL</p>
        </td>
        {stateValue}
        <td>
          <p>{this.props.date}</p>
        </td>
      </tr>
    );
  }
}

export default Order;
