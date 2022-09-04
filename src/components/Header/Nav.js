import React from "react";
import "./Header.css";

import { MdMail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartButton from "../UI/CartButton";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import useWindowSize from "../../customHooks/useWindowSize";

const Nav = () => {
  const [activeIcon, setActiveIcon] = useState("#");
  const dispatch = useDispatch();
  const [height, width] = useWindowSize();
  const cartButtonState = useSelector((state) => state.ui.cartIsVisible);

  const desktopNav = (
    <nav className="fixed-nav">
      <Link to="/cart">{cartButtonState && <CartButton />}</Link>
      <Link
        to="/"
        onClick={() => {
          setActiveIcon("#");
          dispatch(uiActions.turnOn());
        }}
        className={activeIcon === "#" ? "active a" : "a"}
        style={{ textDecoration: "none" }}
      >
        <HiHome />
        <p>Home</p>
      </Link>
      <Link
        to="/shop"
        onClick={() => {
          setActiveIcon("#shop");
          dispatch(uiActions.turnOn());
        }}
        className={activeIcon === "#shop" ? "active a" : "a"}
        style={{ textDecoration: "none" }}
      >
        <FaShoppingCart />
        <p>Shop</p>
      </Link>
      <Link
        to="/custom"
        onClick={() => setActiveIcon("#projects")}
        className={activeIcon === "#projects" ? "active a" : "a"}
        style={{ textDecoration: "none" }}
      >
        <FaPenFancy />
        <p>Custom</p>
      </Link>
      <Link
        to="/about"
        onClick={() => setActiveIcon("#about")}
        className={activeIcon === "#about" ? "active a" : "a"}
        style={{ textDecoration: "none" }}
      >
        <FaUser />
        <p>About</p>
      </Link>
      <Link
        to="/contact"
        onClick={() => setActiveIcon("#contact")}
        className={activeIcon === "#contact" ? "active a" : "a"}
        style={{ textDecoration: "none" }}
      >
        <MdMail />
        <p>Contact</p>
      </Link>
    </nav>
  );

  const mobileNav = (
    <nav className="mobile-nav">
      <Link
        to="/"
        onClick={() => {
          setActiveIcon("#");
          dispatch(uiActions.turnOn());
        }}
        className={activeIcon === "#" ? "active a" : "a"}
        style={{ textDecoration: "none" }}
      >
        <HiHome />
      </Link>
      <Link
        to="/shop"
        onClick={() => {
          setActiveIcon("#shop");
          dispatch(uiActions.turnOn());
        }}
        className={activeIcon === "#shop" ? "active a" : "a"}
        style={{ textDecoration: "none" }}
      >
        <FaShoppingCart />
      </Link>
      <Link
        to="/custom"
        onClick={() => setActiveIcon("#projects")}
        className={activeIcon === "#projects" ? "active a" : "a"}
        style={{ textDecoration: "none" }}
      >
        <FaPenFancy />
      </Link>
      <Link
        to="/contact"
        onClick={() => setActiveIcon("#contact")}
        className={activeIcon === "#contact" ? "active a" : "a"}
        style={{ textDecoration: "none" }}
      >
        <MdMail />
      </Link>
      <Link to="/cart">
        <CartButton />
      </Link>
    </nav>
  );

  const navBar = width > 600 ? desktopNav : mobileNav;

  return navBar;
};

export default Nav;
