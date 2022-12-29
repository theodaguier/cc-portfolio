import { useState } from "react";

import Accordion from "../components/Accordion";
import About from "../components/About";
import Header from "../components/Header";
import Projects from "../components/Projects";

function Home() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="home">
      <Header setShowAbout={setShowAbout} />
      <Projects />
      {showAbout && <About />}
    </div>
  );
}

export default Home;
