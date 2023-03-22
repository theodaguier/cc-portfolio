import { useState } from "react";

import "./../styles/pages/home.scss";

import Accordion from "../components/Accordion";
import About from "../components/About";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import MenuNav from "../components/MenuNav";
import SelectProjectPreview from "../components/SelectProjectPreview";

import useLocoScroll from "./../hooks/useLocoScroll";

function Home({
  showAbout,
  setShowAbout,
  isLight,
  setLight,
  isHovering,
  setIsHovering,
}) {
  const [currentTag, setCurrentTag] = useState("All");
  // const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const [isProjectSelected, setIsProjectSelected] = useState(false);

  useLocoScroll();

  return (
    <div className="home" id="main-container">
      {/* <Header
        isLight={isLight}
        setLight={setLight}
        setShowAbout={setShowAbout}
        showAbout={showAbout}
      /> */}
      <MenuNav
        currentTag={currentTag}
        setCurrentTag={setCurrentTag}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        setShowAbout={setShowAbout}
        showAbout={showAbout}
        isProjectSelected={isProjectSelected}
        setIsProjectSelected={setIsProjectSelected}
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
      {/* <Footer isLight={isLight} /> */}
    </div>
  );
}

export default Home;
