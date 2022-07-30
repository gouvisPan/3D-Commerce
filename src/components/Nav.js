import React from "react";
import "./Nav.css";
import { RiHome3Fill } from "react-icons/ri";
import { MdContactPage } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [activeIcon, setActiveIcon] = useState("#");

  return (
    <nav className="fixed-nav">
      <Link
        to="/"
        onClick={() => setActiveIcon("#")}
        className={activeIcon === "#" ? "active" : ""}
      >
        <RiHome3Fill />
        <p>Home</p>
      </Link>

      <Link
        to="/about"
        onClick={() => setActiveIcon("#about")}
        className={activeIcon === "#about" ? "active" : ""}
      >
        <FaUser />
        <p>About</p>
      </Link>
      <Link
        to="/products"
        onClick={() => setActiveIcon("#projects")}
        className={activeIcon === "#projects" ? "active" : ""}
      >
        <FaCode />
        <p>Products</p>
      </Link>
      <Link
        to="/"
        onClick={() => setActiveIcon("#contact")}
        className={activeIcon === "#contact" ? "active" : ""}
      >
        <MdContactPage />
        <p>Contact</p>
      </Link>
    </nav>
  );
};

export default Nav;
