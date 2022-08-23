import React from "react";
import Product from "./Product";
import "./Products.css";
import { useSelector } from "react-redux";

const isInCategories = (categories, active) => {
  const flag = false;

  for (let i = 0; i < categories.length; i++) {
    if (categories[i].id === active.id) {
      flag = true;
    }
  }
  return flag;
};

const ProductList = ({ addToCart }) => {
  const commerce = useSelector((state) => state.commerce);
  console.log(commerce);

  const displayedProducts = commerce.products.filter((product) => {
    return product.categories.includes(
      (category) => category.id === commerce.activeCategory.id
    );
  });

  commerce.products.map((product) => {
    product.categories.map((category) => {
      console.log(category.id === commerce.activeCategory.id);
    });
  });

  console.log("DISPLAYED" + displayedProducts);

  return (
    <div className="productList-container">
      {displayedProducts.map((product) => (
        <Product product={product} addToCart={addToCart} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
