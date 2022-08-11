import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Juvp from "../../assets/Juvp.gif"
import './About.css'
import Card from '../../components/UI/Card'

const About = () => {
  return (
    <div className="page-container">
      <div className="video-container">
        <img src={Juvp} />
        <Card>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In assumenda veritatis ipsum et adipisci saepe tempore pariatur odit consectetur optio aperiam doloribus aliquam ad iusto, praesentium dolores magni vero ex! Lorem ipsum dolor sit amet consectetur adipisicing elit. In assumenda veritatis ipsum et adipisci saepe tempore pariatur odit consectetur optio aperiam doloribus aliquam ad iusto, praesentium dolores magni vero ex </p>
        </Card>
      </div>
      <Wrapper apiKey={"YOUR_API_KEY"}>
      </Wrapper>
    </div>
  );
};

export default About;
