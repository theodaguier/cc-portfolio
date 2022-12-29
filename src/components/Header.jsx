import React, { useState } from "react";

import "../styles/components/header.scss";
import Typewriter from "./Typewriter";
import sun from "./../assets/icons/sun.svg";
import moon from "./../assets/icons/moon.svg";

import { Link } from "react-router-dom";

import About from "./About";

function Header({ setShowAbout }) {
  const [isDark, setDark] = React.useState(
    localStorage.getItem("isDark") === "true"
  );

  function handleAboutClick() {
    setShowAbout(true);
  }

  function toggleDark() {
    setDark(!isDark);
    document.body.classList.toggle("dark");
    localStorage.setItem("isDark", !isDark.toString());
  }

  return (
    <nav className="menu-container">
      <div className="menu">
        <div className="line flex">
          <p className="flex">
            <Link to="/">
              Cristina Casañas <Typewriter />
            </Link>
          </p>

          <img
            className="icon"
            src={isDark ? sun : moon}
            alt="sun"
            onClick={toggleDark}
          />
        </div>
        <div className="line flex">
          <p onClick={handleAboutClick}>About</p>
        </div>
        <div className="line flex">
          <Link to="/gallery">Gallery</Link>
          <div className="lang">
            <p>English,</p>
            <p>French,</p>
            <p>Spanish</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
