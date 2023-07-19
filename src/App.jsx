import React, { useState, useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Media from "react-media";

import "./styles/main.scss";

import Header from "./components/Header";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import CustomCursor from "./utils/CustomCursor";
import Footer from "./components/Footer";

const App = () => {
  const appRef = useRef();
  const [showAbout, setShowAbout] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [currentTag, setCurrentTag] = useState("All");
  const [selectedTag, setSelectedTag] = useState(null);
  const [isProjectSelected, setIsProjectSelected] = useState(false);
  const [hoverProjectPreview, setHoverProjectPreview] = useState(false);

  console.log("selectedTag", selectedTag);
  console.log("currentTag", currentTag);

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  // Save the dark or light mode in localStorage
  const [isLight, setLight] = useState(false);

  useEffect(() => {
    const savedIsLight = localStorage.getItem("isLight");
    const initialIsLight = savedIsLight ? JSON.parse(savedIsLight) : false;
    setLight(initialIsLight);
  }, []);

  useEffect(() => {
    localStorage.setItem("isLight", JSON.stringify(isLight));
  }, [isLight]);

  return (
    <>
      <div
        className={`App ${isLight ? "light" : "dark"}`}
        ref={appRef}
        onMouseMove={handleMouseMove}
      >
        <Media query="(max-width: 950px)">
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
                        currentTag={currentTag}
                        setCurrentTag={setCurrentTag}
                        isProjectSelected={isProjectSelected}
                        setIsProjectSelected={setIsProjectSelected}
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
                      hoverProjectPreview={hoverProjectPreview}
                      setHoverProjectPreview={setHoverProjectPreview}
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
                        hoverProjectPreview={hoverProjectPreview}
                        setHoverProjectPreview={setHoverProjectPreview}
                        isProjectSelected={isProjectSelected}
                        setIsProjectSelected={setIsProjectSelected}
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
                        setHoverProjectPreview={setHoverProjectPreview}
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
                      hoverProjectPreview={hoverProjectPreview}
                      setHoverProjectPreview={setHoverProjectPreview}
                    />
                  }
                />
              </Routes>
            )
          }
        </Media>
      </div>
      <Media query="(max-width: 950px)">
        {(matches) =>
          !matches ? (
            <CustomCursor
              isHovering={isHovering}
              setIsHovering={setIsHovering}
              cursorPosition={cursorPosition}
              isLight={isLight}
              setCursorPosition={setCursorPosition}
            />
          ) : null
        }
      </Media>
    </>
  );
};

export default App;
