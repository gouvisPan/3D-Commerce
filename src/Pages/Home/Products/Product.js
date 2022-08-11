import React from "react";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import "./Products.css";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  console.log(product);
  return (
    <div className="product-card">
      <img src={product.image.url} />
      <div className="name-price-container">
        <span><strong>{product.name}</strong></span>
        <span>{product.price.formatted_with_code}</span>
      </div>
    </div>
  );
};

export default Product;
