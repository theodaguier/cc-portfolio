import shortid from "shortid";
import { useState } from "react";

function ProjectsPhoto({ project, isHovering, setIsHovering }) {
  const imagesArray = Object.values(project.images);

  const [xRotate, setXRotate] = useState(0);
  const [yRotate, setYRotate] = useState(0);

  return (
    <div className="gallery-container">
      <div className="angry-grid">
        <div id="item-0">
          <img
            src={project.images.img1}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            alt="image"
          />
        </div>
        <div id="item-1">
          <img
            src={project.images.img2}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            alt="image"
          />
        </div>
        <div id="item-2">
          <img
            src={project.images.img3}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            alt="image"
          />
        </div>
        <div id="item-3">
          <img
            src={project.images.img5}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            alt="image"
          />
        </div>
        <div id="item-4">
          <img
            src={project.images.img6}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            alt="image"
          />
        </div>
        <div id="item-5">
          <img
            src={project.images.img7}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            alt="image"
          />
        </div>
        <div id="item-6">
          <img
            src={project.images.img4}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            alt="image"
          />
        </div>
        <div id="banner" style={{ gridColumn: "1 / 5" }}>
          <img
            src={project.images.img8}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsPhoto;
