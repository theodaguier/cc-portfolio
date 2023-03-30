import { useState, useEffect } from "react";
import Media from "react-media";

import "../styles/components/header.scss";
import Typewriter from "./Typewriter";

import sun from "./../assets/icons/sun.svg";
import moon from "./../assets/icons/moon.svg";

import { Link } from "react-router-dom";

import About from "./About";
import TagFilter from "./TagFilter";
import MenuNav from "./MenuNav";

function Header({
  isLight,
  setLight,
  showAbout,
  setShowAbout,
  currentTag,
  setCurrentTag,
  selectedTag,
  setSelectedTag,
  isProjectSelected,
  setIsProjectSelected,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [homeHovered, setHomeHovered] = useState(false);

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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    setIsHovered(false);
  }, [showAbout]);

  return (
    <nav className="menu-container" style={{ display: "flex", width: "100%" }}>
      <Media query="(max-width: 768px)">
        {(matches) =>
          !matches ? (
            <>
              <div className="menu">
                <div className="flex" style={{ width: "100%" }}>
                  <Link
                    to="/"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <p style={{ width: "112px" }}>
                      {isHovered ? "Home" : "Cristina Casañas"}
                    </p>
                  </Link>
                </div>
                {!showAbout ? (
                  <p
                    onClick={() => setShowAbout(true)}
                    style={{ width: "100%" }}
                  >
                    About
                  </p>
                ) : (
                  <p
                    onClick={() => setShowAbout(false)}
                    style={{ width: "100%" }}
                  >
                    Close
                  </p>
                )}
                <Link to="/gallery" style={{ width: "100%" }}>
                  Gallery
                </Link>
              </div>
              <div className="buttons">
                <div className="lang">
                  <p>(En)</p>
                  <p>(Fr)</p>
                  <p>(Es)</p>
                </div>
                <img
                  className="icon"
                  src={isLight ? moon : sun}
                  alt="sun"
                  onClick={toggleLight}
                />
              </div>
            </>
          ) : (
            <>
              <div className="menu menu-mobile">
                <div className="flex" style={{ width: "25%" }}>
                  <Link
                    to="/"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <p style={{ width: "112px" }}>
                      {isHovered ? "Home" : "Cristina Casañas"}
                    </p>
                  </Link>
                </div>
                {!showAbout ? (
                  <p
                    onClick={() => setShowAbout(true)}
                    style={{ width: "25%" }}
                  >
                    About
                  </p>
                ) : (
                  <p
                    onClick={() => setShowAbout(false)}
                    style={{ width: "100%" }}
                  >
                    Close
                  </p>
                )}
                <Link to="/gallery" style={{ width: "25%" }}>
                  Gallery
                </Link>
                <div
                  className="button-menu-project-preview"
                  style={{ width: "25%" }}
                >
                  <div className="button-open-menu">Bouton</div>
                </div>
              </div>
              <div className="menu line2">
                <MenuNav
                  currentTag={currentTag}
                  setCurrentTag={setCurrentTag}
                  selectedTag={selectedTag}
                  setSelectedTag={setSelectedTag}
                  isProjectSelected={isProjectSelected}
                  setIsProjectSelected={setIsProjectSelected}
                />
              </div>
            </>
          )
        }
      </Media>
    </nav>
  );
}

export default Header;
