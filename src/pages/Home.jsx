import { useState } from "react";

import Accordion from "../components/Accordion";
import About from "../components/About";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

function Home({
  showAbout,
  setShowAbout,
  isLight,
  setLight,
  isHovering,
  setIsHovering,
}) {
  return (
    <div className="home">
      <Header
        isLight={isLight}
        setLight={setLight}
        setShowAbout={setShowAbout}
        showAbout={showAbout}
      />
      <Projects
        isHovering={isHovering}
        setIsHovering={setIsHovering}
        isLight={isLight}
        setLight={setLight}
      />
      {showAbout && (
        <About
          isLight={isLight}
          setLight={setLight}
          setShowAbout={setShowAbout}
          showAbout={showAbout}
        />
      )}
      <Footer isLight={isLight} />
    </div>
  );
}

export default Home;
