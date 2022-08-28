import React from "react";
import "./ProductListItem.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { BiDownArrow } from "react-icons/bi";
import { BiUpArrow } from "react-icons/bi";

const ProductListItem = (props) => {
  return (
    <div className="product-container">
      <img src={props.img} />
      <div className="product-title">
        <h3>{props.name} </h3>
      </div>
      <div className="quantity-updater">
        <span> {props.quantity} </span>
        <div className="qnt-btns">
          <BiUpArrow
            className="qnt-btn"
            onClick={() => props.updateQnty(props.id, props.quantity + 1)}
          />
          <BiDownArrow
            className="qnt-btn"
            onClick={() => props.updateQnty(props.id, props.quantity - 1)}
          />
        </div>
      </div>
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
