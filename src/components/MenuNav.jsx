import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Media from "react-media";

import TagFilter from "./../components/TagFilter";
import Typewriter from "./../components/Typewriter";
import Header from "./../components/Header";

import arrowDRB from "./../assets/icons/arrow.up.right.black.svg";
import arrowDRW from "./../assets/icons/arrow.up.right.white.svg";

const MenuNav = ({
  currentTag,
  setCurrentTag,
  selectedTag,
  setSelectedTag,
  setShowAbout,
  isLight,
  isProjectSelected,
  setIsProjectSelected,
}) => {
  // état pour le tag sélectionné

  function handleTagClick(tag) {
    setCurrentTag(tag); // met à jour le tag sélectionné
    setSelectedTag(tag);
  }

  return (
    <Media query="(max-width: 950px)">
      {(matches) =>
        !matches ? (
          <>
            <div
              className="menu-nav"
              onClick={() => setIsProjectSelected(false)}
            >
              {/* <Typewriter /> */}
              <ul className="work">
                <Link to="/gallery" style={{ width: "75%" }}>
                  <li>Photography</li>
                </Link>
                <li>Work</li>
                <TagFilter
                  currentTag={currentTag}
                  setCurrentTag={setCurrentTag}
                  setSelectedTag={setSelectedTag}
                  handleTagClick={handleTagClick} // passe la fonction de rappel à TagFilter
                />
              </ul>
              <ul className="social-media">
                <li>
                  {" "}
                  <img
                    className="arrow"
                    src={isLight ? arrowDRB : arrowDRW}
                    alt="icon"
                  />{" "}
                  <a
                    href="https://www.instagram.com/casanascristine/"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  {" "}
                  <img
                    className="arrow"
                    src={isLight ? arrowDRB : arrowDRW}
                    alt="icon"
                  />{" "}
                  <a
                    href="https://www.behance.net/cristinacasaas?tracking_source=search_projects%7Coracle"
                    target="_blank"
                  >
                    Behance
                  </a>
                </li>
                <li>
                  {" "}
                  <img
                    className="arrow"
                    src={isLight ? arrowDRB : arrowDRW}
                    alt="icon"
                  />{" "}
                  <a href="mailto:info@cristinacasanas.com">Mail </a>
                </li>
                <li>
                  {" "}
                  <img
                    className="arrow"
                    src={isLight ? arrowDRB : arrowDRW}
                    alt="icon"
                  />{" "}
                  <a href="sms:/+33656698355">0656698355</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <div
            onClick={() => setIsProjectSelected(false)}
            style={{ width: "100%" }}
          >
            <TagFilter
              currentTag={currentTag}
              setCurrentTag={setCurrentTag}
              setSelectedTag={setSelectedTag}
              handleTagClick={handleTagClick} // passe la fonction de rappel à TagFilter
            />
          </div>
        )
      }
    </Media>
  );
};

export default MenuNav;
