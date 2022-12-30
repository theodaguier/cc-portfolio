import React, { useState, useEffect } from "react";

import projects_data from "./../data/projects.js";

import "./../styles/components/projects.scss";

import TagFilter from "./TagFilter";
import Accordion from "./Accordion";
import ProjectsPhoto from "./ProjectsPhoto";

function Projects({ isLight, setLight }) {
  const [currentTag, setCurrentTag] = useState("All"); // état pour le tag sélectionné

  function handleTagClick(tag) {
    setCurrentTag(tag); // met à jour le tag sélectionné
    setSelectedTag(tag);
  }

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    if (isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(false); // retire la classe CSS de transition
      }, 300); // délai de 300 ms
    }
  }, [isTransitioning]);

  return (
    <>
      <div
        className={`tag-filter ${
          isTransitioning ? "fade-enter fade-enter-active" : ""
        }`}
      >
        <TagFilter
          currentTag={currentTag}
          setCurrentTag={setCurrentTag}
          handleTagClick={handleTagClick}
          isTransitioning={isTransitioning}
          setIsTransitioning={setIsTransitioning}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
        {projects_data.map((project, index) => (
          <div className="project" key={index}>
            {/* filtre les projets en fonction du tag sélectionné */}
            {currentTag === "All" || currentTag === project.tag ? (
              <>
                <Accordion
                  project={project}
                  isLight={isLight}
                  setLight={setLight}
                />
                <ProjectsPhoto project={project} />
              </>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
