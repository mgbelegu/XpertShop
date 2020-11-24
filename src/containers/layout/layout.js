import React, { Component } from "react";
import Aux from "../hoc/Auxiliary";
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";
import "./layout.css";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Navigation />
        <main className="content">{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
