import React from "react";

const CartReview = ({ token }) => {
  return (
    <div>
      <h3>Order summary</h3>
      {token.live.line_items.map((product) => (
        <li>
          {product.name} {product.quantity}{" "}
          {product.line_total.formatted_with_symbol}
        </li>
      ))}
    </div>
  );
};

export default CartReview;
