import shortid from "shortid";

function ProjectsPhoto({ project, isHovering, setIsHovering }) {
  const imagesArray = Object.values(project.images);

  return (
    <div className="project-photos">
      <div className="grid">
        <div className="col left">
          <div className="col-50">
            <div className="col-25">
              <div className="row-25">
                {/* Image 1 */}
                <img
                  className="image i1"
                  src={project.images.img1}
                  alt="image"
                  key={shortid.generate()}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                />
              </div>
              <div className="row-25">
                {/* Image 2 */}
                <img
                  className="image i2"
                  src={project.images.img2}
                  alt="image"
                  key={shortid.generate()}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                />
              </div>
            </div>
            <div className="row-100">
              {/* Image 4 */}
              <img
                className="image i4"
                src={project.images.img4}
                alt="image"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              />
            </div>
          </div>
        </div>
        <div className="col right">
          <div className="col-33">
            {/* Image 3 */}
            <img
              className="image i3"
              src={project.images.img3}
              alt="image"
              key={shortid.generate()}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            />
          </div>
          <div className="col-33 col5">
            {/* Image 5 */}
            <img
              className="image i5"
              src={project.images.img5}
              alt="image"
              key={shortid.generate()}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            />
          </div>
          <div className="col-33">
            <div className="row-25">
              {/* Image 6 */}
              <img
                className="image i6"
                src={project.images.img6}
                alt="image"
                key={shortid.generate()}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              />
            </div>
            <div className="row-25">
              {/* Image 7 */}
              <img
                className="image i7"
                src={project.images.img7}
                alt="image"
                key={shortid.generate()}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-full">
        <img
          className="full-image"
          src={project.images.img8}
          alt="image"
          key={shortid.generate()}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        />
      </div>
    </div>
  );
}

export default ProjectsPhoto;
