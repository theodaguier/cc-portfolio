import React, { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";

import "./styles/base/base.scss";

import Header from "./components/Header";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

function App() {
  const appRef = useRef(); // création de la référence de l'élément .App
  const [isLight, setLight] = useState(
    localStorage.getItem("isLight") === "true"
  );

  return (
    <div className="App" ref={appRef}>
      <Routes>
        <Route
          path="/"
          element={<Home isLight={isLight} setLight={setLight} />}
        />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
