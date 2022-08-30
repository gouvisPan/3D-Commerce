import React from "react";
import Modal from "../../../../components/UI/Modal";
import "./ProductInfo.css";
import { ImPriceTags } from "react-icons/im";
import { TiMinus } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";
import ColorVariants from "./ColorVariants";
import QuantityUpdater from "../../../Cart/QuantityUpdater";
import { useState } from "react";

const ProductInfo = (props) => {
  const product = props.info;
  const [qnty, setQnty] = useState(1);

  console.log(product);

  const addToCartClickHandler = () => {
    console.log("CLICKED");
    props.onClose();
    props.addToCart(product.id);
  };

  const addOneHandler = () => {
    setQnty(qnty + 1);
  };
  const subtractOneHandler = () => {
    if (qnty > 1) {
      setQnty(qnty - 1);
    }
  };

  return (
    <Modal onClose={props.onClose}>
      <span onClick={props.onClose} className="close-x">
        x
      </span>
      <div className="modal-container">
        <div className="product-info-container">
          <div className="img-container">
            <img src={product.image.url} />
          </div>
          <div className="information">
            <p>{product.description.replace("<p>", "").replace("</p>", "")}</p>
            <ColorVariants />
          </div>
        </div>
        <hr className="inbetween-line"></hr>
        <div className="buying-area">
          <span>{product.price.formatted_with_code}</span>
          <ImPriceTags className="price-icon"></ImPriceTags>
          <div className="quantity-meter">
            <TiMinus onClick={subtractOneHandler} className="qnty-btn" />
            <span>{qnty}</span>
            <TiPlus onClick={addOneHandler} className="qnty-btn" />
          </div>
          <button onClick={addToCartClickHandler}>Add to Cart</button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductInfo;
