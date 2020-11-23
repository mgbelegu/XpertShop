import React from "react";
import "./product.css";

const product = (props) => {
  return (
    <div className="productContainer">
      <div>
        <img src={props.productImage} alt="" />
        <h3>{props.productTitle}</h3>
        <p>{props.productDescription}</p>
        <p className="price">ALL {props.productPrice}</p>
      </div>

      <div className="buttonDiv">
        <button>ADD TO CART</button>
        <button className="buyNow">BUY NOW</button>
      </div>
    </div>
  );
};

export default product;
