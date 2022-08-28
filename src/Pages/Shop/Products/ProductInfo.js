import React from "react";
import Modal from "../../../components/UI/Modal";
import "./ProductInfo.css";
import { AiFillCloseCircle } from "react-icons/ai";

const ProductInfo = (props) => {
  const product = props.info;
  console.log(product);
  return (
    <Modal onClose={props.onClose}>
      <div className="product-info-container">
        <div className="img-container">
          <img src={product.image.url} />
        </div>
        <div className="information">
          <p>{product.description.replace("<p>", "").replace("</p>", "")}</p>
          <span>{product.price.formatted_with_code}</span>
        </div>
      </div>
      <div className="variants"></div>

      <span onClick={props.onClose} className="close-x">
        x
      </span>
    </Modal>
  );
};

export default ProductInfo;
