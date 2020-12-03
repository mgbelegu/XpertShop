import React, { Component } from "react";
import { connect } from "react-redux";
import "./orders.css";
import Layout from "../layout/layout";
import LoginIcon from "../../assets/loginicon.png";
import { NavLink } from "react-router-dom";
import * as actions from "../store/actions/index";
import OrderItem from "./order/order";
import Spinner from "../../containers/ui/spinner/spinner";

class Orders extends Component {
  state = {
    showDetails: false,
    loading: false,
  };

  componentDidMount() {
    this.props.onFetchOrdersMade();
  }

  render() {
    let Authenticated = (
      <div className="notLoggedIn">
        <h2>Ju nuk jeni kyçur akoma!</h2>
        <p>
          <NavLink to="/kycu">Kyçuni</NavLink> ose{" "}
          <NavLink to="/regjistrohu">krijoni</NavLink> një llogari për të
          vazhduar më tutje.
        </p>
        <img src={LoginIcon} alt="" />
      </div>
    );

    let orderslist = (
      <tr>
        <td
          style={{ width: "100%", margin: "0 auto !important" }}
          colSpan="100%"
        >
          <Spinner />
        </td>
      </tr>
    );

    if (!this.props.loading) {
      orderslist = this.props.ordersMade.map((order, i) => (
        <OrderItem
          key={i}
          id={order.id}
          total={order.total}
          state={order.state}
          date={order.date}
          products={order.productsOrdered}
          userinfo={order.userinfo}
        />
      ));
    }

    if (orderslist.length === 0) {
      orderslist = (
        <tr>
          <td colSpan="100%" style={{ padding: "50px" }}>
            Ju nuk keni asnjë porosi!
          </td>
        </tr>
      );
    }

    if (this.props.isAuthenticated) {
      Authenticated = (
        <div className="orders">
          <div className="ordersHeader">
            <h1>Porositë</h1>
          </div>

          <div className="ordersContainer">
            <h3>Porositë:</h3>
            <table className="ordersTable">
              <tbody>
                <tr>
                  <th>ID e porosisë</th>
                  <th>Totali</th>
                  <th id="orderStatusTH">Gjendja</th>
                  <th>Data</th>
                </tr>
                {orderslist}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    return <Layout>{Authenticated}</Layout>;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    ordersMade: state.ordersMade.ordersMade,
    loading: state.ordersMade.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrdersMade: () => dispatch(actions.fetchOrdersMade()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
