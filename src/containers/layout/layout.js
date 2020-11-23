import React from "react";
import Aux from "../hoc/Auxiliary";
import Navigation from "../navigation/navigation";
import "./layout.css";

const layout = (props) => {
  return (
    <Aux>
      <Navigation />
      <main className="content">{props.children}</main>
    </Aux>
  );
};

export default layout;
