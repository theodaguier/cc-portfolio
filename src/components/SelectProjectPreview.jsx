import "./../styles/components/SelectProjectPreview.scss";

function SelectProjectPreview({
  projects,
  selectedProject,
  setSelectedProject,
  handleProjectSelect,
  scrollContainerRef,
}) {
  const handleClick = (project) => {
    setSelectedProject(project);
    handleProjectSelect(project.name);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="container-scroll-preview">
      {projects &&
        projects.map((project, index) => (
          <div
            className={`project-preview ${
              selectedProject && selectedProject.id === project.id
                ? "selected"
                : ""
            }`}
            key={index}
            onClick={() => handleClick(project)}
          >
            <img
              src={project.cover}
              alt={`${project.name} preview`}
              className="project-preview-image"
            />
          </div>
        ))}
    </div>
  );
}

export default SelectProjectPreview;
