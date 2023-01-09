import { useState } from "react";

import Accordion from "../components/Accordion";
import About from "../components/About";
import Header from "../components/Header";
import Projects from "../components/Projects";

function Home({ isLight, setLight }) {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="home">
      <Header
        isLight={isLight}
        setLight={setLight}
        setShowAbout={setShowAbout}
        showAbout={showAbout}
      />
      <Projects isLight={isLight} setLight={setLight} />
      {showAbout && <About isLight={isLight} setLight={setLight} />}
    </div>
  );
}

export default Home;
