import { useState, useEffect } from "react";
import i18n from "i18next";
import Media from "react-media";

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
  hoverProjectPreview,
  setHoverProjectPreview,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [homeHovered, setHomeHovered] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const toggleLight = () => {
    setLight(!isLight);
    if (isLight) {
      document.querySelector(".App").classList.add("light");
      document.querySelector(".App").classList.remove("dark");
    } else {
      document.querySelector(".App").classList.add("dark");
      document.querySelector(".App").classList.remove("light");
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

  const displaySelectProjectPreview = () => {
    hoverProjectPreview === true
      ? setHoverProjectPreview(false)
      : setHoverProjectPreview(true);
  };

  // // Changer de langue
  // const handleLanguageClick = (lang) => {
  //   i18n.changeLanguage(lang);
  //   setSelectedLanguage(lang);
  // };

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
                    style={{ width: "75%" }}
                  >
                    About
                  </p>
                ) : (
                  <p
                    onClick={() => setShowAbout(false)}
                    style={{ width: "75%" }}
                  >
                    Close
                  </p>
                )}
                <Link to="/gallery" style={{ width: "75%" }}>
                  Gallery
                </Link>
              </div>
              <div className="buttons">
                <div className="lang">
                  <p
                    onClick={() => handleLanguageClick("en")}
                    className={selectedLanguage === "en" ? "active" : ""}
                  >
                    (En)
                  </p>
                  {/* <p
                    onClick={() => handleLanguageClick("fr")}
                    className={selectedLanguage === "fr" ? "active" : ""}
                  >
                    (Fr)
                  </p>
                  <p
                    onClick={() => handleLanguageClick("es")}
                    className={selectedLanguage === "es" ? "active" : ""}
                  >
                    (Es)
                  </p> */}
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
                    style={{ width: "25%", textAlign: "center" }}
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
                <Link
                  to="/gallery"
                  style={{ width: "25%", textAlign: "center" }}
                >
                  Gallery
                </Link>
                <div
                  className="button-menu-project-preview"
                  style={{ width: "25%", textAlign: "right" }}
                >
                  <div
                    className="button-open-menu"
                    onClick={displaySelectProjectPreview}
                  >
                    {hoverProjectPreview ? "Close" : "Projects"}
                  </div>
                </div>
              </div>
              <div
                className="menu line2"
                style={{ position: "relative", top: "10px" }}
              >
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
