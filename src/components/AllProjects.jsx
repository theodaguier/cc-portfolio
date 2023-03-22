import React from "react";

const AllProjects = ({filteredProjects}) => {
  return( <div>
  <>
    {filteredProjects.map((project, index) => (
  <div className="grid">
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
  )}
</>
  </div>);
};

export default AllProjects;
