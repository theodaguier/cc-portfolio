import React, { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";

import "./styles/base/base.scss";

import Header from "./components/Header";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

import CustomCursor from "./utils/CustomCursor";

function App() {
  const appRef = useRef(); // création de la référence de l'élément .App
  const [isLight, setLight] = useState(
    localStorage.getItem("isLight") === "true"
  );
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="App" ref={appRef}>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              showAbout={showAbout}
              setShowAbout={setShowAbout}
              isLight={isLight}
              setLight={setLight}
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
            />
          }
        />
      </Routes>
      <CustomCursor />
    </div>
  );
}

export default App;
