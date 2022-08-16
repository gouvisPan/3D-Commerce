import React from "react";
import Product from "./Product";
import "./Products.css";
import { useState } from "react";

const ProductList = ({ products, addToCart }) => {
  const [coosenCategory, setChoosenCategory] = useState(""); 
  
  const displayedProducts = myModels.filter(model => model.category === choosenModel.name);
  console.log(displayedProducts);

  return (
    <div className="productList-container">
      {products.map((product) => (
        <Product product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
