import React from "react";

import Juvp from "../../assets/Juvp.gif";
import "./About.css";

const About = () => {
  return (
    <section className="page-container">
      <div className="how-container">
        <h2 className="title">HOW?</h2>
        <div className="video-container">
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

      <div className="how-container"></div>

      <div className="how-container"></div>
    </section>
  );
};

export default About;
