import React, { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";

import "./styles/base/base.scss";

import Header from "./components/Header";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import CustomCursor from "./utils/CustomCursor";

const App = () => {
  const appRef = useRef();
  const [isLight, setLight] = useState(
    localStorage.getItem("isLight") === "true"
  );
  const [showAbout, setShowAbout] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.pageX, y: event.pageY });
  };

  return (
    <div className="App" ref={appRef} onMouseMove={handleMouseMove}>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              showAbout={showAbout}
              setShowAbout={setShowAbout}
              isLight={isLight}
              setLight={setLight}
              isHovering={isHovering}
              setIsHovering={setIsHovering}
            />
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
      <CustomCursor
        isHovering={isHovering}
        setIsHovering={setIsHovering}
        cursorPosition={cursorPosition}
        isLight={isLight}
        setCursorPosition={setCursorPosition}
      />
    </div>
  );
};

export default App;
