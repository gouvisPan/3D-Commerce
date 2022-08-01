import React from "react";
import "./Nav.css";

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
        className={activeIcon === "#" ? "active a" : "a"}
        style={{textDecoration : "none"}}
      >
        <MdContactPage />
        <p>Home</p>
      </Link>

      <Link
        to="/about"
        onClick={() => setActiveIcon("#about")}
        className={activeIcon === "#about" ? "active a" : "a"}
        style={{textDecoration : "none"}}
      
      >
        <FaUser />
        <p>About</p>
      </Link>
      <Link
        to="/custom"
        onClick={() => setActiveIcon("#projects")}
        className={activeIcon === "#projects" ? "active a" : "a"}
        style={{textDecoration : "none"}}
      >
        <FaCode />
        <p>Products</p>
      </Link>
      <Link
        to="/contact"
        onClick={() => setActiveIcon("#contact")}
        className={activeIcon === "#contact" ? "active a" : "a"}
        style={{textDecoration : "none"}}
      >
        <MdContactPage />
        <p>Contact</p>
      </Link>
    </nav>
  );
};

export default Nav;
