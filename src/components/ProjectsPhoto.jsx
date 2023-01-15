function ProjectsPhoto({ project, isHovering, setIsHovering }) {
  return (
    <div className="project-photos">
      {project.images.map((img, index) => (
        <img
          src={img}
          alt={img}
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
        />
      ))}
    </div>
  );
}

export default ProjectsPhoto;
