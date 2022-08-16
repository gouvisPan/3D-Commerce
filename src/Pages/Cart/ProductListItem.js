import React from "react";
import "./ProductListItem.css";
import {RiDeleteBin6Line} from 'react-icons/ri'
const ProductListItem = (props) => {
  return (
    <div className="product-container">
      <img src={props.img} />
      <div className="product-title">
        <h3>{props.name} </h3>
        <span>&nbsp;x{props.quantity} </span>
      </div>
      <span>
       {props.total}
      </span>
      <RiDeleteBin6Line className="del-icon"/>
    </div>
  );
};

export default ProductListItem;
