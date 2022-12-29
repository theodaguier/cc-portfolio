function ProjectsPhoto({ project }) {
  return (
    <div className="project-photos">
      <img src={project.images} alt={project.images} />
    </div>
  );
}

export default ProjectsPhoto;
