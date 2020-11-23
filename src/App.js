import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./containers/layout/layout";
import LoginForm from "./containers/loginForm/loginForm";
import RegisterForm from "./containers/registerForm/registerForm";
import Store from "./containers/home/home";
import Categories from "./containers/categories/categories";
import Cart from "./containers/cart/cart";
import Logout from "./containers/logout/logout";
import Orders from "./containers/orders/orders";
import Profile from "./containers/profile/profile";
import "./App.css";

class App extends Component {
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
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={Store} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
