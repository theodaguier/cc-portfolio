import { useState } from "react";
import Media from "react-media";

import Accordion from "../components/Accordion";
import About from "../components/About";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import MenuNav from "../components/MenuNav";
import SelectProjectPreview from "../components/SelectProjectPreview";

import useLocoScroll from "../hooks/useLocoScroll";

function Home({
  showAbout,
  setShowAbout,
  isLight,
  setLight,
  isHovering,
  setIsHovering,
  currentTag,
  setCurrentTag,
  selectedTag,
  setSelectedTag,
  isProjectSelected,
  setIsProjectSelected,
  hoverProjectPreview,
  setHoverProjectPreview,
}) {
  useLocoScroll();

  return (
    <div className="home" id="main-container">
      <Media query="(max-width: 950px)">
        {(matches) =>
          !matches ? (
            <>
              <MenuNav
                currentTag={currentTag}
                setCurrentTag={setCurrentTag}
                selectedTag={selectedTag}
                setSelectedTag={setSelectedTag}
                setShowAbout={setShowAbout}
                showAbout={showAbout}
                isProjectSelected={isProjectSelected}
                setIsProjectSelected={setIsProjectSelected}
                isLight={isLight}
              />
              <Projects
                currentTag={currentTag}
                setCurrentTag={setCurrentTag}
                isHovering={isHovering}
                setIsHovering={setIsHovering}
                isLight={isLight}
                setLight={setLight}
                isProjectSelected={isProjectSelected}
                setIsProjectSelected={setIsProjectSelected}
              />
              {showAbout && (
                <About
                  isLight={isLight}
                  setLight={setLight}
                  setShowAbout={setShowAbout}
                  showAbout={showAbout}
                />
              )}
            </>
          ) : (
            <div className="home mobile">
              <Projects
                currentTag={currentTag}
                setCurrentTag={setCurrentTag}
                isHovering={isHovering}
                setIsHovering={setIsHovering}
                isLight={isLight}
                setLight={setLight}
                isProjectSelected={isProjectSelected}
                setIsProjectSelected={setIsProjectSelected}
                hoverProjectPreview={hoverProjectPreview}
                setHoverProjectPreview={setHoverProjectPreview}
              />
              {showAbout && (
                <About
                  isLight={isLight}
                  setLight={setLight}
                  setShowAbout={setShowAbout}
                  showAbout={showAbout}
                />
              )}
            </div>
          )
        }
      </Media>
    </div>
  );
}

export default Home;
