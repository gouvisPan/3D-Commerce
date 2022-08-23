import React from "react";
import "./Cart.css";
import ProductListItem from "./ProductListItem";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const Cart = (props) => {
  const myCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(myCart);

  return (
    <div className="cart-container">
      <div className="left-cart">
        <h2>Your Cart</h2>
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
            />
          ))}
        </div>
      </div>
      <div className="right-cart">
        <h3>Order summary</h3>
        <div className="total-price">
          <span>Total price</span>
          <h4>{myCart.subtotal_raw}€</h4>
        </div>
        <div className="shipping">
          <span>Shipping cost</span>
          <h4>10.00€</h4>
        </div>
        <div className="grand-total">
          <span>Total cost</span>
          <h4>{myCart.subtotal_raw + 10}.00€</h4>
        </div>
        <div className="cart-buttons">
          <Link
            to="/shop"
            className="link"
            onClick={() => dispatch(uiActions.turnOn())}
          >
            <span className="back-to-shopping-btn">Back to shopping</span>
          </Link>
          <span className="complete-order-btn">Proceed to payment</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
