import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./containers/layout/layout";
import LoginForm from "./containers/loginForm/loginForm";
import RegisterForm from "./containers/registerForm/registerForm";
import Store from "./containers/home/home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/regjistrohu" component={RegisterForm} />
          <Route path="/shporta" component={LoginForm} />
          <Route path="/porosite" component={LoginForm} />
          <Route path="/profili" component={LoginForm} />
          <Route path="/kycu" component={LoginForm} />
          <Route path="/" exact component={Store} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
