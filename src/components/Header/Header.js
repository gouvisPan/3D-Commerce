import React from "react";
import Nav from "./Nav";
import logo from "../../assets/logo-no-bg.png";
import { useLocation } from "react-router-dom";
import CartButton from "../UI/CartButton";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  const location = useLocation();
  const logoCss = location.pathname.slice() === "/contact" ? "logo w" : "logo";

  return (
    <div>
      <img src={logo} className={logoCss}></img>
      <Nav />
      <NavLink
        to="/cart"
        className={(navData) => (navData.isActive ? "active-cart a" : "a")}
      >
        <CartButton />
      </NavLink>
    </div>
  );
};

export default Header;
