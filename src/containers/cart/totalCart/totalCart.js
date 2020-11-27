import React, { Component } from "react";

class TotalCart extends Component {
  render() {
    let total = this.props.totalPrice;
    return (
      <div className="cartTotal">
        <h4>Totali: </h4>
        <h4>{Number(total).toLocaleString()} ALL</h4>
      </div>
    );
  }
}

export default TotalCart;
