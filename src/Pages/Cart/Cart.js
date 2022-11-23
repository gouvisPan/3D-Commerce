import React from "react";
import "./Cart.css";
import ProductListItem from "./ProductListItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, Fragment } from "react";

const Cart = (props) => {
  const myCart = useSelector((state) => state.cart);
  const emptyCartJSX = (
    <div className="empty-cart-container">
      {" "}
      <h3>Your cart is empty!</h3>{" "}
      <h5>
        Go shopping and fill your cart with goods via our{" "}
        <Link to="/shop" className="empty-blue">
          shop
        </Link>
        !
      </h5>
    </div>
  );
  return (
    <div className="cart-general-container">
      {myCart.items.length === 0 ? (
        emptyCartJSX
      ) : (
        <Fragment>
          <h2>Your Cart</h2>
          <div className="cart-container">
            <div className="left-cart">
              <div className="cart-list">
                {myCart.items.map((item) => (
                  <ProductListItem
                    key={item.id}
                    name={item.product_name}
                    id={item.id}
                    img={item.image.url}
                    quantity={item.quantity}
                    price={item.price.formatted_with_symbol}
                    total={item.line_total.formatted_with_symbol}
                    removeFromCart={props.removeFromCart}
                    updateQnty={props.updateCartQnty}
                  />
                ))}
              </div>
            </div>
            <div className="right-cart">
              <div className="grand-total">
                <h3>Cost summary</h3>
                <h4>{myCart.subtotal_raw}.00€</h4>
              </div>
              <div className="cart-buttons">
                <Link to="/shop" className="link">
                  <span className="back-to-shopping-btn">Back to shopping</span>
                </Link>
                <Link to="/checkout" className="link">
                  <span className="complete-order-btn">Proceed to payment</span>
                </Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Cart;
