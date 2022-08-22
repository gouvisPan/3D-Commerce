import React from "react";
import "./Header.css";

import { MdContactPage } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartButton from "./UI/CartButton";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";

const Nav = () => {
  const [activeIcon, setActiveIcon] = useState("#");

  const cartButtonState = useSelector((state) => state.ui.cartIsVisible);
  return (
    <nav className="fixed-nav">
      <Link to="/cart">{cartButtonState && <CartButton />}</Link>
      <Link
        to="/"
        onClick={() => setActiveIcon("#")}
        className={activeIcon === "#" ? "active a" : "a"}
        style={{ textDecoration: "none" }}
      >
        <HiHome />
        <p>Home</p>
      </Link>
      <Link
        to="/shop"
        onClick={() => setActiveIcon("#shop")}
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
};

export default Nav;
