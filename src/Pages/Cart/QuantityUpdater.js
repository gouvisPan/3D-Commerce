import React from 'react'
import "./Cart.css"
import { BiDownArrow } from "react-icons/bi";
import { BiUpArrow } from "react-icons/bi";

const QuantityUpdater = (props) => {
    
  return (
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
  )
}

export default QuantityUpdater