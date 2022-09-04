import React, { useState } from "react";
import "../Header/Header.css";
import { MdShoppingBasket } from "react-icons/md";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { useSelector } from "react-redux";
import useWindowSize from "../../customHooks/useWindowSize";

const CartButton = (props) => {
  const dipatch = useDispatch();
  const quantityBadge = useSelector((state) => state.cart.total_items);
  const [height, width] = useWindowSize();

  const toggleHandler = () => {
    dipatch(uiActions.toggle());
  };

  return (
    <div className="wrapper-bottom">
      <div className="positioning-class" onClick={toggleHandler}>
        <MdShoppingBasket className="outer-basket" />
        <span className="badge">{quantityBadge}</span>
      </div>
    </div>
  );
};

export default CartButton;
