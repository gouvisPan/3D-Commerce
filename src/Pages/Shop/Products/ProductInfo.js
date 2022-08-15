import React from "react";
import Modal from "../../../components/UI/Modal";
import "./ProductInfo.css";

const ProductInfo = (props) => {
  const product = props.info;
  console.log(product);
  return (
    <Modal onClose={props.onClose}>
      <div className="product-info-container">
        <div className="img-container">
          <img src={product.image.url} />
        </div>
        <p>{product.description.replace("<p>", "").replace("</p>", "")}</p>
        <button onClick={props.onClose}>close</button>
      </div>
    </Modal>
  );
};

export default ProductInfo;
