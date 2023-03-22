import { useState } from "react";
import shortid from "shortid";

import Accordion from "./Accordion";

function ProjectsPhoto({
  project,
  isHovering,
  setIsHovering,
  isLight,
  setLight,
  backToTop,
}) {
  const imagesArray = project ? Object.values(project.images) : [];

  const [xRotate, setXRotate] = useState(0);
  const [yRotate, setYRotate] = useState(0);

  return (
    <div className="grid">
      {project && (
        <div className="presentation">
          <img
            className="image-cover"
            src={project.cover}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            alt="image"
          />
          <Accordion project={project} />
        </div>
      )}
      <div className="images-projects">
        {imagesArray.map((image, index) => (
          <div
            className="image-wrapper"
            key={shortid.generate()}
            id={`item-${index + 2}`}
          >
            {image && (
              <img
                src={image}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                alt={`Image ${index + 2}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPhoto;
