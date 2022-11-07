import React, { useState } from "react";
import "../Header/Header.css";
import { MdShoppingBasket } from "react-icons/md";
import { useSelector } from "react-redux";
import useWindowSize from "../../customHooks/useWindowSize";

const CartButton = (props) => {
  const quantityBadge = useSelector((state) => state.cart.total_items);
  const [height, width] = useWindowSize();

  return (
    <div className="wrapper-bottom">
      <div className="positioning-class">
        <MdShoppingBasket className="outer-basket" />
        <span className="badge">{quantityBadge}</span>
      </div>
    </div>
  );
};

export default CartButton;
