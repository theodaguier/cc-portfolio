import React, { useState, useEffect, useRef } from "react";
import projects_data from "./../data/projects.js";
import "./../styles/components/projects.scss";

import TagFilter from "./TagFilter";
import Accordion from "./Accordion";
import ProjectsPhoto from "./ProjectsPhoto";
import SelectProjectPreview from "./SelectProjectPreview";

function Projects({
  isLight,
  setLight,
  isHovering,
  setIsHovering,
  currentTag,
  setCurrentTag,
  isProjectSelected,
  setIsProjectSelected,
}) {
  // nouvelle variable d'état
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedProjectPreview, setSelectedProjectPreview] = useState(null);
  const scrollContainerRef = useRef(null);
  const [filteredProjects, setFilteredProjects] = useState([...projects_data]); // initialiser filteredProjects avec la valeur par défaut allProjects

  useEffect(() => {
    if (selectedProject && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, [selectedProject]);

  const handleClick = (project) => {
    setSelectedProject(project);
    setSelectedProjectPreview(null);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleProjectSelect = (projectName) => {
    const project = projects_data.find((p) => p.name === projectName);
    if (project && project !== selectedProject) {
      setSelectedProject(project);
      setCurrentTag(tag);
      setSelectedProjectPreview(null);
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    setFilteredProjects(
      currentTag
        ? currentTag === "All"
          ? [...projects_data]
          : projects_data.filter(
              (project) => project.tags && project.tags.includes(currentTag)
            )
        : [...projects_data]
    );
  }, [currentTag]);

  // console.log(currentTag);
  // console.log(selectedProject);
  const handleTagClick = (tag) => {
    setCurrentTag(tag);
    setIsSelected(false);
  };

  return (
    <>
      <div className="tag-filter" ref={scrollContainerRef}>
        <div className="project-container" data-scroll-section>
          {isProjectSelected && selectedProject ? (
            <div className="project">
              <ProjectsPhoto
                isHovering={isHovering}
                setIsHovering={setIsHovering}
                project={selectedProject}
                selectedProject={selectedProject}
                isLight={isLight}
                setLight={setLight}
              />
            </div>
          ) : (
            !isProjectSelected && (
              <>
                {filteredProjects.map((project) => (
                  <div className="project" key={project.id}>
                    <div
                      onClick={() => {
                        handleClick(project);
                        setIsProjectSelected(true);
                      }}
                    >
                      <ProjectsPhoto
                        isHovering={isHovering}
                        setIsHovering={setIsHovering}
                        project={project}
                        selectedProject={selectedProjectPreview}
                        isLight={isLight}
                        setLight={setLight}
                      />
                    </div>
                  </div>
                ))}
              </>
            )
          )}
        </div>
      </div>
      <div
        className="scroll-projects-menu"
        onClick={() => setIsProjectSelected(true)}
      >
        <SelectProjectPreview
          projects={filteredProjects}
          selectedProject={selectedProjectPreview}
          setSelectedProject={setSelectedProjectPreview}
          handleProjectSelect={handleProjectSelect}
          scrollContainerRef={scrollContainerRef}
        />
      </div>
    </>
  );
}

export default Projects;
