import React from "react";
import "./ProductListItem.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import QuantityUpdater from "./QuantityUpdater";

const ProductListItem = (props) => {
  
  return (
    <div className="product-container">
      <img src={props.img} />
      <div className="product-title">
        <h3>{props.name} </h3>
      </div>
      <QuantityUpdater updateQnty={props.updateQnty} quantity={props.quantity} id={props.id}/>     
      <span>{props.total}</span>
      <RiDeleteBin6Line
        className="del-icon"
        onClick={() => {
          props.removeFromCart(props.id);
        }}
      />
    </div>
  );
};

export default ProductListItem;
