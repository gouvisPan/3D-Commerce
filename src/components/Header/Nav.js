import React from "react";
import "./Header.css";
import { Fragment } from "react";
import { MdMail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import useWindowSize from "../../customHooks/useWindowSize";

const Nav = () => {
  const [height, width] = useWindowSize();
  const navJSX = (
    <Fragment>
      <NavLink
        className={(navData) => (navData.isActive ? "active a" : "a")}
        to="/"
        style={{ textDecoration: "none" }}
      >
        <HiHome />
        <p>Home</p>
      </NavLink>
      <NavLink
        to="/shop"
        className={(navData) => (navData.isActive ? "active a" : "a")}
        style={{ textDecoration: "none" }}
      >
        <FaShoppingCart />
        <p>Shop</p>
      </NavLink>
      <NavLink
        to="/custom"
        className={(navData) => (navData.isActive ? "active a" : "a")}
        style={{ textDecoration: "none" }}
      >
        <FaPenFancy />
        <p>Custom</p>
      </NavLink>
      <NavLink
        to="/contact"
        className={(navData) => (navData.isActive ? "active a" : "a")}
        style={{ textDecoration: "none" }}
      >
        <MdMail />
        <p>Contact</p>
      </NavLink>
    </Fragment>
  );

  const desktopNav = (
    <nav className="fixed-nav">
      {navJSX}
      <NavLink
        to="/about"
        className={(navData) => (navData.isActive ? "active a" : "a")}
        style={{ textDecoration: "none" }}
      >
        <FaUser />
        <p>About</p>
      </NavLink>
    </nav>
  );

  const mobileNav = <nav className="mobile-nav">{navJSX}</nav>;

  const navBar = width > 1100 ? desktopNav : mobileNav;

  return navBar;
};

export default Nav;
