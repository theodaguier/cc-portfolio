import React, { useState, useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Media from "react-media";

import "./styles/base/base.scss";

import Header from "./components/Header";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import CustomCursor from "./utils/CustomCursor";

const App = () => {
  const appRef = useRef();
  const [isLight, setLight] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const [currentTag, setCurrentTag] = useState("All");
  // const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const [isProjectSelected, setIsProjectSelected] = useState(false);
  const [hoverProjectPreview, setHoverProjectPreview] = useState(false);

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  console.log("hover", hoverProjectPreview);
  return (
    <>
      <div className="App" ref={appRef} onMouseMove={handleMouseMove}>
        <Media query="(max-width: 768px)">
          {(matches) =>
            !matches ? (
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Header
                        showAbout={showAbout}
                        setShowAbout={setShowAbout}
                        isLight={isLight}
                        setLight={setLight}
                      />
                      <Home
                        showAbout={showAbout}
                        setShowAbout={setShowAbout}
                        isLight={isLight}
                        setLight={setLight}
                        isHovering={isHovering}
                        setIsHovering={setIsHovering}
                        currentTag={currentTag}
                        setCurrentTag={setCurrentTag}
                        selectedTag={selectedTag}
                        setSelectedTag={setSelectedTag}
                        isProjectSelected={isProjectSelected}
                        setIsProjectSelected={setIsProjectSelected}
                      />
                    </>
                  }
                />
                <Route
                  path="/Gallery"
                  element={
                    <Gallery
                      showAbout={showAbout}
                      setShowAbout={setShowAbout}
                      isLight={isLight}
                      setLight={setLight}
                      isHovering={isHovering}
                      setIsHovering={setIsHovering}
                    />
                  }
                />
              </Routes>
            ) : (
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Header
                        showAbout={showAbout}
                        setShowAbout={setShowAbout}
                        isLight={isLight}
                        setLight={setLight}
                        currentTag={currentTag}
                        setCurrentTag={setCurrentTag}
                        selectedTag={selectedTag}
                        setSelectedTag={setSelectedTag}
                        isProjectSelected={isProjectSelected}
                        setIsProjectSelected={setIsProjectSelected}
                        hoverProjectPreview={hoverProjectPreview}
                        setHoverProjectPreview={setHoverProjectPreview}
                      />
                      <Home
                        showAbout={showAbout}
                        setShowAbout={setShowAbout}
                        isLight={isLight}
                        setLight={setLight}
                        isHovering={isHovering}
                        setIsHovering={setIsHovering}
                        currentTag={currentTag}
                        setCurrentTag={setCurrentTag}
                        selectedTag={selectedTag}
                        setSelectedTag={setSelectedTag}
                        isProjectSelected={isProjectSelected}
                        setIsProjectSelected={setIsProjectSelected}
                        hoverProjectPreview={hoverProjectPreview}
                      />
                    </>
                  }
                />
                <Route
                  path="/Gallery"
                  element={
                    <Gallery
                      showAbout={showAbout}
                      setShowAbout={setShowAbout}
                      isLight={isLight}
                      setLight={setLight}
                      isHovering={isHovering}
                      setIsHovering={setIsHovering}
                    />
                  }
                />
              </Routes>
            )
          }
        </Media>
      </div>
      <CustomCursor
        isHovering={isHovering}
        setIsHovering={setIsHovering}
        cursorPosition={cursorPosition}
        isLight={isLight}
        setCursorPosition={setCursorPosition}
      />
    </>
  );
};

export default App;
