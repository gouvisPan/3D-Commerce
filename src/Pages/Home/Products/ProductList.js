import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product";
import "./Products.css";

const ProductList = ({ products }) => {
  return (
    <div className="productList-container">
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};

export default ProductList;
