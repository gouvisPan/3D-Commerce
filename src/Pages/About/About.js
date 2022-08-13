import React from "react";

import Juvp from "../../assets/Juvp.gif";
import "./About.css";
import Card from "../../components/UI/Card";

const About = () => {
  return (
    <section className="page-container">
      <div className="video-container">
        <img src={Juvp} />
        <Card>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            assumenda veritatis ipsum et adipisci saepe tempore pariatur odit
            consectetur optio aperiam doloribus aliquam ad iusto, praesentium
            dolores magni vero ex! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. In assumenda veritatis ipsum et adipisci saepe
            tempore pariatur odit consectetur optio aperiam doloribus aliquam ad
            iusto, praesentium dolores magni vero ex{" "}
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
