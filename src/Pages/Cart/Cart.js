import React from "react";
import "./Cart.css";
import ProductListItem from "./ProductListItem";
import { Link } from "react-router-dom";
const Cart = (props) => {
  const myCart = props.cart;
  console.log(myCart);

  return (
    <div className="cart-container">
      <div className="left-cart">
        <h2>Your Cart</h2>
        <div className="cart-list">
        {myCart.line_items.map((product) => (
          
          <ProductListItem
            key={product.id}
            name={product.product_name}
            img={product.image.url}
            quantity={product.quantity}
            price={product.price.formatted_with_symbol}
            total={product.line_total.formatted_with_symbol}
            />
            ))}
            </div>
      </div>
      <div className="right-cart">
         <h3>Order summary</h3> 
        <div className="total-price">
           <span>Total price</span> 
           <h4>{myCart.subtotal.formatted}€</h4>
        </div>
        <div className="shipping">
        <span>Shipping cost</span> 
           <h4>10.00€</h4>
        </div>
        <div className="grand-total">
           <span>Total cost</span> 
           <h4>{myCart.subtotal.raw + 10}.00€</h4>
        </div>
        <div className="cart-buttons">
          <Link to="/shop" className="link">
        <span className="back-to-shopping-btn">Back to shopping</span>
          </Link>
        <span className="complete-order-btn">Proceed to payment</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;