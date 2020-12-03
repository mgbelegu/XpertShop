import React, { Component } from "react";
import "./orderDetails.css";

class orderDetails extends Component {
  state = {
    ...this.props.location.state,
  };

  render() {
    let productList = null;
    productList = this.state.products.map((p, i) => {
      return (
        <li key={i}>
          {p.title} &times; {p.count} copë
        </li>
      );
    });

    let userInfo = (
      <ol type="1">
        <li>Emër: {this.state.userinfo.name}</li>
        <li>Mbiemër: {this.state.userinfo.surname}</li>
        <li>Kompania: {this.state.userinfo.company}</li>
        <li>Rruga: {this.state.userinfo.street}</li>
        <li>Numër banese: {this.state.userinfo.apartment}</li>
        <li>Qyteti: {this.state.userinfo.city}</li>
        <li>Kodi Postar/ZIP: {this.state.userinfo.zip}</li>
        <li>Shënime për porosinë: {this.state.userinfo.notes}</li>
      </ol>
    );

    return (
      <div className="orderDetails">
        <p>
          <strong>Data</strong>: {this.state.dateofpurchase}
        </p>
        <h1>Detajet e porosisë</h1>
        <div>
          <h3>Produktet: </h3>
          <ol>{productList}</ol>
        </div>
        <div>
          <h3>Informacioni i blerësit</h3>
          {userInfo}
        </div>
        <h3>Totali: {Number(this.state.total).toLocaleString()} ALL</h3>
        <h3>Gjëndja e porosisë: {this.state.status}</h3>
      </div>
    );
  }
}

export default orderDetails;
