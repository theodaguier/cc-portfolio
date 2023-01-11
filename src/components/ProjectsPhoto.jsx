function ProjectsPhoto({ project, isHovering, setIsHovering }) {
  return (
    <div className="project-photos">
      <img
        src={project.images}
        alt={project.images}
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      />
    </div>
  );
}

export default ProjectsPhoto;
