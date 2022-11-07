import React from "react";
import "./Cart.css";
import ProductListItem from "./ProductListItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const myCart = useSelector((state) => state.cart);
  return (
    <div className="cart-general-container">
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
            <h4>{myCart.subtotal_raw + 10}.00€</h4>
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
    </div>
  );
};

export default Cart;
