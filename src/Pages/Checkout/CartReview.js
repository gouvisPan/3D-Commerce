import React from "react";
import "./Checkout.css";

const CartReview = ({ token }) => {
  console.log(token);
  return (
    <div className="review-container">
      <h3>Order summary</h3>
      <ul>
        {token.line_items.map((product) => (
          <li>
            <img src={product.image.url} className="img-thumbnail" />
            <span>{product.name}</span>
            <span className="qnty">x{product.quantity}</span>
            <span> {product.line_total.formatted_with_symbol}</span>
          </li>
        ))}
      </ul>

      <div className="total-section">
        <span>Subtotal: </span>
        <span>{token.subtotal.formatted_with_symbol}</span>
        <span>Shipping cost: </span>
        <span>{token.shipping.price.formatted_with_symbol}</span>
        <span>Total: </span>
        <span>{token.total.formatted_with_symbol}</span>
      </div>
    </div>
  );
};

export default CartReview;
