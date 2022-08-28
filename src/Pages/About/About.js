import React from "react";
import Juvp from "../../assets/Juvp.gif";
import "./About.css";
import Map from "./Map";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <section className="page-container">
      <div className="hww-container">
        <h2 className="title">HOW?</h2>
        <div className="card-container">
          <img src={Juvp} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            assumenda veritatis ipsum et adipisci saepe tempore pariatur odit
            consectetur optio aperiam doloribus aliquam ad iusto, praesentium
            dolores magni vero ex! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. In assumenda veritatis ipsum et adipisci saepe
            tempore pariatur odit consectetur optio aperiam doloribus aliquam ad
            iusto, praesentium dolores magni vero ex{" "}
          </p>
        </div>
      </div>

      <div className="hww-container">
        <h2 className="title right">WHERE?</h2>
        <div className="card-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            assumenda veritatis ipsum et adipisci saepe tempore pariatur odit
            consectetur optio aperiam doloribus aliquam ad iusto, praesentium
            dolores magni vero ex! Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <div className="map-container">
            <Map />
          </div>
        </div>
      </div>

      <div className="hww-container last">
        <h2 className="title left">WHY?</h2>
        <div className="card-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            assumenda veritatis ipsum et adipisci saepe tempore pariatur odit
            consectetur optio aperiam doloribus aliquam ad iusto, praesentium
            dolores magni vero ex! Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default About;
