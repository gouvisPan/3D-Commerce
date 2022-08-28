import React from "react";
import useStyles from "./styles";
import "./Products.css";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";
import ProductInfo from "./ProductInfo";

const Product = ({ product, addToCart }) => {
  const [isProductClicked, setIsProductClicked] = useState(false);

  const clickHandler = () => {
    setIsProductClicked(true);
  };

  const closeClickHandler = () => {
    setIsProductClicked(false);
  };

  // console.log(product);
  return (
    <div>
      <div className="product-card">
        <img src={product.image.url} onClick={clickHandler} />
        <div className="name-price-container">
          <span>
            <strong>{product.name}</strong>
          </span>
          {/* <span>
          {product.description.replace("<p>", "").replace("</p>", "")}
        </span> */}
          <div className="buy-zone">
            <span>{product.price.formatted_with_code}</span>
            <div className="cart-icon" onClick={() => addToCart(product.id)}>
              <FaCartPlus />
            </div>
          </div>
        </div>
      </div>
      {isProductClicked && (
        <ProductInfo info={product} onClose={closeClickHandler} />
      )}
    </div>
  );
};

export default Product;
