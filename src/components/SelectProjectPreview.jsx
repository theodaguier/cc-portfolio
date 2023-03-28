import { useState, useEffect } from "react";
import "./../styles/components/SelectProjectPreview.scss";

function SelectProjectPreview({
  projects,
  selectedProject,
  setSelectedProject,
  handleProjectSelect,
  tag,
}) {
  const [key, setKey] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [onHoverImageAnim, setOnHoverImageAnim] = useState(false);

  const handleClick = (project) => {
    setSelectedProject(project);
    handleProjectSelect(project.name);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isSelected = (project) => {
    return project === selectedProject;
  };

  const isHovered = (project) => {
    return project === hoveredProject;
  };

  return (
    <div className="container-scroll-preview">
      {projects &&
        projects.map((project, index) => (
          <div
            className={`project-preview ${
              isSelected(project) ? "selected" : ""
            }`}
            key={index}
            onClick={() => handleClick(project)}
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <img
              src={project.cover}
              alt={`${project.name} preview`}
              className={`project-preview-image ${
                isSelected(project) ? "selected-image" : ""
              }`}
              onMouseEnter={(e) => e.target.classList.add("hovered")}
              onMouseLeave={(e) => e.target.classList.remove("hovered")}
              style={
                isSelected(project)
                  ? onHoverImageAnim === true
                    ? { transform: "scale(1.1)", background: "none" }
                    : { transform: "scale(1)" }
                  : {}
              }
              key={`${project.cover}-${key}`}
            />
          </div>
        ))}
    </div>
  );
}

export default SelectProjectPreview;
