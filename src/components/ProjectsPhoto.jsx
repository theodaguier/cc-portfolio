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
                <div
                  className="image i1"
                  style={{ backgroundImage: `url(${project.images.img1})` }}
                  alt="image description"
                  key={shortid.generate()}
                ></div>
              </div>
              <div className="row-25">
                {/* Image 2 */}
                <div
                  className="image i2"
                  style={{ backgroundImage: `url(${project.images.img2})` }}
                  alt="image description"
                  key={shortid.generate()}
                ></div>
              </div>
            </div>
            <div className="row-100">
              {/* Image 4 */}
              <div
                className="image i4"
                style={{ backgroundImage: `url(${project.images.img4})` }}
                alt="image description"
                key={shortid.generate()}
              ></div>
            </div>
          </div>
        </div>
        <div className="col right">
          <div className="col-33">
            {/* Image 3 */}
            <div
              className="image i3"
              style={{ backgroundImage: `url(${project.images.img3})` }}
              alt="image description"
              key={shortid.generate()}
            ></div>
          </div>
          <div className="col-33 col5">
            {/* Image 5 */}
            <div
              className="image i4"
              style={{ backgroundImage: `url(${project.images.img5})` }}
              alt="image description"
              key={shortid.generate()}
            ></div>
          </div>
          <div className="col-33">
            <div className="row-25">
              {/* Image 6 */}
              <div
                className="image i6"
                style={{ backgroundImage: `url(${project.images.img6})` }}
                alt="image description"
                key={shortid.generate()}
              ></div>
            </div>
            <div className="row-25">
              {/* Image 7 */}
              <div
                className="image i7"
                style={{ backgroundImage: `url(${project.images.img7})` }}
                alt="image description"
                key={shortid.generate()}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-full">
        <div
          className="image i8"
          style={{ backgroundImage: `url(${project.images.img8})` }}
          alt="image description"
          key={shortid.generate()}
        ></div>
      </div>
    </div>
  );
}

export default ProjectsPhoto;
