import { useState, useEffect } from "react";

import "../styles/components/header.scss";
import Typewriter from "./Typewriter";

import sun from "./../assets/icons/sun.svg";
import moon from "./../assets/icons/moon.svg";

import { Link } from "react-router-dom";

import About from "./About";

function Header({ isLight, setLight, showAbout, setShowAbout }) {
  const [isHovered, setIsHovered] = useState(false);

  const toggleLight = () => {
    setLight(!isLight);
    if (isLight) {
      document.querySelector(".App").classList.remove("light");
    } else {
      document.querySelector(".App").classList.add("light");
    }
    localStorage.setItem("isLight", !isLight.toString());
  };

  const handleAboutClick = () => {
    setShowAbout(true);
  };

  useEffect(() => {
    setIsHovered(false);
  }, [showAbout]);

  return (
    <nav className="menu-container">
      <div className="menu">
        <p className="flex" style={{ width: "100%" }}>
          <Link
            className={isHovered ? "hovered" : ""}
            to="/"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? "Home" : "Cristina Casañas"}

            {/* {isHovered ? null : <Typewriter />} */}
          </Link>
        </p>
        {!showAbout ? (
          <p onClick={() => setShowAbout(true)} style={{ width: "100%" }}>
            About
          </p>
        ) : (
          <p onClick={() => setShowAbout(false)} style={{ width: "100%" }}>
            Close
          </p>
        )}
        <Link to="/gallery" style={{ width: "100%" }}>
          Gallery
        </Link>
        <div className="buttons">
          <div className="lang">
            <p>En</p>
            <p>Fr</p>
            <p>Es</p>
          </div>
          <img
            className="icon"
            src={isLight ? moon : sun}
            alt="sun"
            onClick={toggleLight}
          />
        </div>
      </div>
    </nav>
  );
}

export default Header;
