import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./containers/layout/layout";
import LoginForm from "./containers/loginForm/loginForm";
import RegisterForm from "./containers/registerForm/registerForm";
import Store from "./containers/home/home";
import Categories from "./containers/categories/categories";
import Cart from "./containers/cart/cart";
import Logout from "./containers/logout/logout";
import Orders from "./containers/orders/orders";
import Profile from "./containers/profile/profile";
import Footer from "./containers/footer/footer";
import * as actions from "./containers/store/actions/index";
import "./App.css";
import NewProducts from "./containers/home/newProducts/newProducts";
import ProductPage from "./components/product/productPage/productPage";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/regjistrohu" component={RegisterForm} />
          <Route path="/shporta" component={Cart} />
          <Route path="/porosite" component={Orders} />
          <Route path="/profili" component={Profile} />
          <Route path="/kycu" component={LoginForm} />
          <Route path="/categories" component={Categories} />
          <Route path="/new-products" component={NewProducts} />
          <Route path="/products/" component={ProductPage} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={Store} />
        </Switch>
        <Footer />
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
