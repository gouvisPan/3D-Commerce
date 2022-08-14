import React from "react";
import img from "../../assets/3dprinting.jpeg";
import logo from "../../assets/logo.png";
import "./Home.css";
import { AiFillPieChart } from "react-icons/ai";
import { BsShieldFillCheck } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <img src={logo} className="logo"></img>
      <div className="general-info">
        <div className="main-text">
          <h1>
            We design, test and produce quality parts, for quality vehicles.
          </h1>
          <p>
            In a small workshop in Thessaloniki, we mastered the art of 3d
            printing, buy recreating the same parts over and over until the
            perfect fitment is achieved
          </p>
          <Link to="/shop" className="link">
            <span className="shop-btn">SHOP PARTS </span>
          </Link>
        </div>
        <img src={img}></img>
      </div>

      <div className="advantage-info">
        <h2>Why pick our 3d printed parts?</h2>
        <div className="advantages">
          <div className="advantage">
            <AiFillPieChart className="adv-icon" />
            <h3>Fitment tested</h3>
            <p>
              Every part that is availiable in our online shop has been tested
              to ensure a perfect fitment.
            </p>
          </div>
          <div className="advantage">
            <BsShieldFillCheck className="adv-icon" />
            <h3>Durable material</h3>
            <p>
              The material selection is based on the utility of the part, taking
              into account the temprature and forces it is exposed to.
            </p>
          </div>
          <div className="advantage">
            <FaMoneyBill className="adv-icon" />
            <h3>Fairly priced</h3>
            <p>
              We provide our products at a fraction of the original's price,
              with no compromisation in the quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
