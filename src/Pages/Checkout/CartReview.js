import React from "react";
import "./CartReview.css";

const CartReview = ({ token }) => {
  console.log(token);
  return (
    <div className="review-container">
      <h3>Order summary</h3>
      <ul>
        {token.line_items.map((product) => (
          <li>
            <img src={product.image.url} className="img-thumbnail" />
            <div className="item-desc">
              <span className="item-name">{product.name}</span>
              <span className="item-quantity">
                Quantity: {product.quantity}
              </span>
            </div>
            <span className="item-price">
              {product.line_total.formatted_with_symbol}
            </span>
          </li>
        ))}
        <li className="change-section">
          <span className="price-desc">Subtotal: </span>
          <span className="price-info">
            {token.subtotal.formatted_with_symbol}
          </span>
        </li>
        <li>
          <span className="price-desc">Shipping cost: </span>
          <span className="price-info">
            {token.shipping.price.formatted_with_symbol}
          </span>
        </li>
        <li className="last-item">
          <span className="final-total-price price-desc">Total: </span>
          <span className="final-total-price price-info">
            {token.total.formatted_with_symbol}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default CartReview;
