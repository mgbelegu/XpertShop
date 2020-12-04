import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";
import "./cart.css";
import Layout from "../layout/layout";
import LoginIcon from "../../assets/loginicon.png";
import { NavLink, Redirect } from "react-router-dom";
import CartProduct from "./cartProduct/cartProduct";
import Spinner from "../ui/spinner/spinner";
import TotalCart from "./totalCart/totalCart";
import axios from "axios";
import Input from "../ui/input/input";

class Cart extends Component {
  state = {
    loading: false,
    redirect: false,
    isClicked: false,
    checkout: false,
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        labelName: "Emër *",
      },
      surname: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        labelName: "Mbiemër *",
      },
      companyname: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "",
        },
        value: "",
        validation: {
          required: false,
        },
        valid: true,
        touched: false,
        labelName: "Emër kompanie (opsionale)",
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Emër rruge",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        labelName: "Rruga *",
      },
      apartment: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Numër banese",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        labelName: "Numër banese *",
      },
      city: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "Berat", displayValue: "Berat" },
            { value: "Dibër", displayValue: "Dibër" },
            { value: "Durrës", displayValue: "Durrës" },
            { value: "Elbasan", displayValue: "Elbasan" },
            { value: "Fier", displayValue: "Fier" },
            { value: "Gjirokastër", displayValue: "Gjirokastër" },
            { value: "Korçë", displayValue: "Korçë" },
            { value: "Kukës", displayValue: "Kukës" },
            { value: "Lezhë", displayValue: "Lezhë" },
            { value: "Shkodër", displayValue: "Shkodër" },
            { value: "Tiranë", displayValue: "Tiranë" },
            { value: "Vlorë", displayValue: "Vlorë" },
          ],
        },
        value: "Tiranë",
        validation: {},
        valid: true,
        labelName: "Qyteti",
      },
      zip: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        labelName: "Kodi Postar/ZIP *",
      },
      notes: {
        elementType: "textarea",
        elementConfig: {
          placeholder:
            "Shënime të veçanta për porosinë ose vendin e dërgimit etj.",
          rows: 5,
        },
        value: "",
        validation: {
          required: false,
        },
        valid: true,
        touched: false,
        labelName: "Shënime për porosinë (opsionale)",
      },
    },
    formIsValid: false,
    isSignup: true,
  };

  componentDidMount() {
    this.props.onFetchOrders();
  }

  goToCheckoutHandler = (totprice) => {
    if (totprice !== 0) {
      this.setState({
        checkout: true,
      });
    } else {
      alert("Shporta juaj është bosh!");
    }
  };

  modifyOrderHandler = () => {
    this.setState({
      checkout: false,
    });
  };

  checkoutHandler = (totprice, orderSpecifications, formValidity) => {
    if (totprice !== 0 && formValidity === true) {
      this.setState({
        loading: true,
      });

      var today = new Date();
      var dd = today.getDate();

      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }

      if (mm < 10) {
        mm = "0" + mm;
      }

      today = dd + "/" + mm + "/" + yyyy;

      let nm = this.state.orderForm.name.value;
      let surn = this.state.orderForm.surname.value;
      let comp = this.state.orderForm.companyname.value;
      let strt = this.state.orderForm.street.value;
      let apt = this.state.orderForm.apartment.value;
      let ct = this.state.orderForm.city.value;
      let zp = this.state.orderForm.zip.value;
      let nts = this.state.orderForm.notes.value;

      let orderDetails = {};
      orderDetails = {
        total: totprice,
        state: "Pending",
        date: today,
        productsOrdered: orderSpecifications,
        userinfo: {
          name: nm,
          surname: surn,
          company: comp,
          street: strt,
          apartment: apt,
          city: ct,
          zip: zp,
          notes: nts,
        },
      };
      axios
        .post(
          `https://xpert-ecommerce.firebaseio.com/ordersmade.json`,
          orderDetails
        )
        .then((response) => {
          this.setState({ loading: false, redirect: true });
        })
        .catch((error) => {
          this.setState({ loading: false });
        });
      axios.delete("https://xpert-ecommerce.firebaseio.com/orders.json");
    } else if (formValidity === false) {
      alert("Plotësoni detajet e faturimit!");
    } else {
      alert("Shporta juaj është bosh!");
    }
  };

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
    };
    const updatedOrderFormElement = {
      ...updatedOrderForm[inputIdentifier],
    };
    updatedOrderFormElement.value = event.target.value;
    updatedOrderFormElement.valid = this.checkValidity(
      updatedOrderFormElement.value,
      updatedOrderFormElement.validation
    );
    updatedOrderFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedOrderFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      orderForm: updatedOrderForm,
      formIsValid: formIsValid,
    });
  };

  render() {
    let cartAuthenticated = (
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

    let showCart = (
      <tr>
        <td
          style={{ width: "100%", margin: "0 auto !important" }}
          colSpan="100%"
        >
          <Spinner />
        </td>
      </tr>
    );

    let total = 0;
    this.props.orders.map(
      (orderItem, i) =>
        (total = total + orderItem.productPrice * orderItem.productCount)
    );

    let orderObject = [];
    if (!this.props.loading) {
      let cartProductList = null;
      cartProductList = this.props.orders
        .filter((orderPrCount) => orderPrCount.productCount !== 0)
        .map((orderItem, i) => {
          orderObject.push({
            title: orderItem.productTitle,
            count: orderItem.productCount,
          });
          return (
            <CartProduct
              key={i}
              productImage={orderItem.productImage}
              productTitle={orderItem.productTitle}
              productPrice={Number(
                orderItem.productPrice * orderItem.productCount
              ).toLocaleString()}
              productId={orderItem.productId}
              productDescription={orderItem.productDescription}
              productCount={orderItem.productCount}
            />
          );
        });

      if (cartProductList.length === 0) {
        showCart = (
          <tr>
            <td colSpan="100%" style={{ padding: "50px" }}>
              Shporta juaj është bosh!
            </td>
          </tr>
        );
      } else {
        showCart = cartProductList;
      }
    }

    let redirectOrders = null;
    if (this.state.redirect) {
      redirectOrders = <Redirect to="/porosite" />;
    }

    if (this.props.isAuthenticated) {
      cartAuthenticated = (
        <div className="cart">
          {redirectOrders}
          <div className="cartHeader">
            <h1>Shporta</h1>
          </div>

          <div className="cartContainer">
            <h3>Produktet:</h3>
            <table id="cart">
              <tbody>
                <tr>
                  <th id="delTH"></th>
                  <th id="imageTH"></th>
                  <th className="productCell">Produkti</th>
                  <th id="priceTH">Cmimi</th>
                  <th id="countTH">Sasia</th>
                  <th id="updateCountTH"></th>
                </tr>
                {showCart}
              </tbody>
            </table>

            <TotalCart totalPrice={total} />
            <button
              className="checkoutButton"
              onClick={() => this.goToCheckoutHandler(total)}
            >
              Bëje porosinë
            </button>
          </div>
        </div>
      );
    }

    let cartListSummary = null;
    cartListSummary = this.props.orders
      .filter((orderPrCount) => orderPrCount.productCount !== 0)
      .map((orderItem, i) => {
        return (
          <tr key={i}>
            <td>
              {orderItem.productTitle} &times; {orderItem.productCount} copë
            </td>
            <td>
              {Number(
                orderItem.productCount * orderItem.productPrice
              ).toLocaleString()}{" "}
              ALL
            </td>
          </tr>
        );
      });

    const orderFormElementsArray = [];
    for (let key in this.state.orderForm) {
      orderFormElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }

    let form = orderFormElementsArray.map((formElement) => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        labelName={formElement.config.labelName}
        passwordMsg={formElement.config.passwordValidation}
        changed={(event) => this.inputChangedHandler(event, formElement.id)}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        invalid={!formElement.config.valid}
      />
    ));

    if (
      this.props.isAuthenticated &&
      this.state.checkout &&
      cartListSummary.length !== 0
    ) {
      cartAuthenticated = (
        <div className="cart">
          {redirectOrders}
          <div className="cartHeader">
            <h1>Checkout</h1>
          </div>
          <div className="formContainer">
            <div className="form">
              <h3>Detajet e faturimit:</h3>
              <form>{form}</form>
            </div>
            <div className="orderSummary">
              <h3>Porosia juaj:</h3>
              <div>
                <table className="orderSummaryTable">
                  <tbody>
                    <tr>
                      <th>Produkti</th>
                      <th>Totali</th>
                    </tr>
                    {cartListSummary}
                  </tbody>
                </table>
                <h4>Çmimi total: {Number(total).toLocaleString()} ALL</h4>
                <label className="container">
                  Cash On Delivery
                  <input type="radio" checked="checked" name="radio" readOnly />
                  <span className="checkmark"></span>
                </label>
              </div>
              <button
                className="modifyOrderButton"
                onClick={() => this.modifyOrderHandler()}
              >
                Modifiko porosinë
              </button>
              <button
                type="submit"
                className="checkoutButtonSummary"
                onClick={() =>
                  this.checkoutHandler(
                    total,
                    orderObject,
                    this.state.formIsValid
                  )
                }
              >
                Bëje porosinë
              </button>
            </div>
          </div>
        </div>
      );
    }

    return <Layout>{cartAuthenticated}</Layout>;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    orders: state.orders.orders,
    loading: state.orders.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
