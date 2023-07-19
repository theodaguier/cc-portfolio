import { useState, useEffect } from "react";
import Media from "react-media";
import { LazyLoadImage } from "react-lazy-load-image-component";

function SelectProjectPreview({
  projects,
  selectedProject,
  setSelectedProject,
  handleProjectSelect,
  tag,
  hoverProjectPreview,
  setHoverProjectPreview,
}) {
  const [key, setKey] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [onHoverImageAnim, setOnHoverImageAnim] = useState(false);

  const handleClick = (project) => {
    setSelectedProject(project);
    handleProjectSelect(project.name);
    setHoverProjectPreview(false);
  };

  const isSelected = (project) => {
    return project === selectedProject;
  };

  const isHovered = (project) => {
    return project === hoveredProject;
  };

  return (
    <div className="container-scroll-preview">
      <Media query="(max-width: 768px)">
        {(matches) =>
          !matches ? (
            <>
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
                    <LazyLoadImage
                      src={project.thumbnail}
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
                      effect="blur"
                      placeholderSrc={project.thumbnail}
                    />
                  </div>
                ))}
            </>
          ) : (
            <>
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
                      src={project.thumbnail}
                      alt={`${project.name} preview`}
                      className={`project-preview-image ${
                        isSelected(project) ? "selected-image" : ""
                      }`}
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
            </>
          )
        }
      </Media>
    </div>
  );
}

export default SelectProjectPreview;
