import React from "react";
import Product from "./Product";
import "./Products.css";
import { useState } from "react";
import { useSelector } from "react-redux";

const ProductList = ({addToCart}) => {
  const commerce = useSelector(state => state.commerce);
  
  // const displayedProducts = commerce.products.filter(
  //   (product) => product.categories.includes(commerce.activeCategory)
  // );

  commerce.products.map(product => {
    product.categories.map(category => console.log(category))
  })
    console.log(commerce.activeCategory);
    // console.log(displayedProducts);

  return (
    <div className="productList-container">
      {commerce.products.map((product) => (
        <Product product={product} addToCart={addToCart} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
