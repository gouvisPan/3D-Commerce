import React from "react";
import Nav from "./Nav";
import logo from "../assets/logo.png";
import "./Header.css";

const Header = (props) => {
  return (
    <div>
      <img src={logo} className="logo"></img>
      <Nav cartCount={props.cartCount} />
    </div>
  );
};

export default Header;
