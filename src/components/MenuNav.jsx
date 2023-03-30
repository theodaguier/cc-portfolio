import { useState, useEffect } from "react";
import Media from "react-media";

import "./../styles/components/menuNav.scss";

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

  // useEffect(() => {
  //   if (isTransitioning) {
  //     setTimeout(() => {
  //       setIsTransitioning(false); // retire la classe CSS de transition
  //     }, 300); // délai de 300 ms
  //   }
  // }, [isTransitioning]);
  console.log(isLight);

  return (
    <Media query="(max-width: 768px)">
      {(matches) =>
        !matches ? (
          <>
            <div
              className="menu-nav"
              onClick={() => setIsProjectSelected(false)}
            >
              {/* <Typewriter /> */}
              <ul className="work">
                <li>Work</li>
                <TagFilter
                  currentTag={currentTag}
                  setSelectedTag={setSelectedTag}
                  handleTagClick={handleTagClick} // passe la fonction de rappel à TagFilter
                />
              </ul>
              <ul className="social-media">
                <li>
                  {" "}
                  <img
                    className="arrow"
                    src={!isLight ? arrowDRW : arrowDRB}
                    alt="icon"
                  />{" "}
                  Instagram
                </li>
                <li>
                  {" "}
                  <img
                    className="arrow"
                    src={!isLight ? arrowDRW : arrowDRB}
                    alt="icon"
                  />{" "}
                  Mail
                </li>
                <li>
                  {" "}
                  <img
                    className="arrow"
                    src={!isLight ? arrowDRW : arrowDRB}
                    alt="icon"
                  />{" "}
                  Numero
                </li>
              </ul>
            </div>
          </>
        ) : (
          <TagFilter
            currentTag={currentTag}
            setSelectedTag={setSelectedTag}
            handleTagClick={handleTagClick} // passe la fonction de rappel à TagFilter
          />
        )
      }
    </Media>
  );
};

export default MenuNav;
