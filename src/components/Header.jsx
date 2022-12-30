import { useState, useEffect } from "react";

import "../styles/components/header.scss";
import Typewriter from "./Typewriter";

import sun from "./../assets/icons/sun.svg";
import moon from "./../assets/icons/moon.svg";

import { Link } from "react-router-dom";

import About from "./About";

function Header({ isLight, setLight, setShowAbout, showAbout }) {
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
        <div className="line flex">
          {!showAbout ? (
            <p className="flex">
              <Link
                className={isHovered ? "hovered" : ""}
                to="/"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {isHovered && "Home"}
                {isHovered ? null : "Cristina Casañas"}
                {isHovered ? null : <Typewriter />}
              </Link>
            </p>
          ) : (
            <div className="close" onClick={() => setShowAbout(false)}>
              close
            </div>
          )}
          <img
            className="icon"
            src={isLight ? moon : sun}
            alt="sun"
            onClick={toggleLight}
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
