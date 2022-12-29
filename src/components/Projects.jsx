import projects_data from "./../data/projects.js";

import Accordion from "./Accordion";
import ProjectsPhoto from "./ProjectsPhoto";

function Projects() {
  return (
    <>
      {projects_data.map((project, index) => (
        <div className="project" key={index}>
          <Accordion project={project} />
          <ProjectsPhoto project={project} />
        </div>
      ))}
    </>
  );
}

export default Projects;
