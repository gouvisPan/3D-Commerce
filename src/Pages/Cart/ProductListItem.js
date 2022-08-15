import React from "react";
import "./ProductListItem.css";

const ProductListItem = (props) => {
  return (
    <div className="product-container">
      <img src={props.img} />
      <div className="product-title">
        <h3>{props.name}</h3>
        <span>x{props.quantity} </span>
      </div>
      <span>
        x {props.price} = {props.total}
      </span>
    </div>
  );
};

export default ProductListItem;
