import React from "react";
import "./Custom.css";
import upload from "./../../assets/upload.png";
import { MdUpload } from "react-icons/md";
import { MdCheckCircle } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdLocalShipping } from "react-icons/md";

const Custom = () => {
  return (
    <section className="page-container">
      <div className="hero-section">
        <img src={upload}></img>
        <div className="custom-text">
          <h1>
            Print your <span className="blue">CUSTOM</span> designs with us.
          </h1>
          <p>
            Upload a scanned image of your item or an .exa file with your custom
            design.
          </p>
          {/* <Link to="/shop" className="link"> */}
          <span className="shop-btn">UPLOAD FILE</span>
          {/* </Link> */}
        </div>
      </div>

      <div className="custom-info-container">
        <div className="custom-info-timeline">
          <MdUpload className="num-icon" />
          <hr className="icon-line" />
          <MdEmail className="num-icon" />
          <hr className="icon-line" />
          <MdCheckCircle className="num-icon" />
          <hr className="icon-line" />
          <MdLocalShipping className="num-icon" />

          <span>Upload File</span>
          <span></span>
          <span>Wait for our Response</span>
          <span></span>
          <span>Procced to Payment</span>
          <span></span>
          <span>Product Shipped</span>
        </div>
      </div>
    </section>
  );
};

export default Custom;
