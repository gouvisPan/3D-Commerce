import React from "react";
import Product from "./Product";
import "./Products.css";
import { useSelector } from "react-redux";


const ProductList = ({ addToCart }) => {
  const commerce = useSelector((state) => state.commerce);
  
  const displayedProducts = commerce.products.filter((product) => {
    return product.categories.some(
      (category) => category.id === commerce.activeCategory.id
    );
  });

  return (
    <div className="productList-container">
      {displayedProducts.map((product) => (
        <Product product={product} addToCart={addToCart} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
