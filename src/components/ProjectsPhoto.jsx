import shortid from "shortid";

function ProjectsPhoto({ project, isHovering, setIsHovering }) {
  const imagesArray = Object.values(project.images);

  return (
    <div className="gallery-container">
      <div class="angry-grid">
        <div id="item-0">
          <img src={project.images.img1} alt="image" />
        </div>
        <div id="item-1">
          <img src={project.images.img2} alt="image" />
        </div>
        <div id="item-2">
          <img src={project.images.img3} alt="image" />
        </div>
        <div id="item-3">
          <img src={project.images.img5} alt="image" />
        </div>
        <div id="item-4">
          <img src={project.images.img6} alt="image" />
        </div>
        <div id="item-5">
          <img src={project.images.img7} alt="image" />
        </div>
        <div id="item-6">
          <img src={project.images.img4} alt="image" />
        </div>
        <div id="item-7">
          <img src={project.images.img8} alt="image" />
        </div>
      </div>
    </div>
  );
}

export default ProjectsPhoto;
