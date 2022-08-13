import React from "react";
import Product from "./Product";
import "./Products.css";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="productList-container">
      {products.map((product) => (
        <Product product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
