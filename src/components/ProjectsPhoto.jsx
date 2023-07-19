import { useState, useRef } from "react";
import shortid from "shortid";
import Slider from "react-slick";
import Accordion from "./Accordion";
import { CarouselItem } from "./CarouselItem";
import ArrowLeftWhite from "./../assets/icons/arrow.left.svg";
import ArrowRightWhite from "./../assets/icons/arrow.right.svg";
import ArrowLeftBlack from "./../assets/icons/arrow.left-black.svg";
import ArrowRightBlack from "./../assets/icons/arrow.right-black.svg";

function ProjectsPhoto({
  project,
  isHovering,
  setIsHovering,
  isLight,
  setLight,
  backToTop,
}) {
  const sliderTop = useRef(null);
  const imagesArray = project ? Object.values(project.images) : [];
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderTopSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    lazyLoad: true,
  };

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  const handleArrowClick = (direction) => {
    if (sliderTop.current) {
      if (direction === "prec") {
        sliderTop.current.slickPrev();
      } else if (direction === "suiv") {
        sliderTop.current.slickNext();
      }
    }
  };

  return (
    <div className="grid" onClick={(event) => event.stopPropagation()}>
      {project && (
        <div className="presentation">
          <img
            className="image-cover"
            src={project.cover}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            alt="image"
          />
          <Accordion project={project} isLight={isLight} setLight={setLight} />
        </div>
      )}

      <div
        className="images-projects"
        onClick={(event) => event.stopPropagation()}
      >
        {project.video ? (
          <video
            className="video"
            src={project.video}
            style={{ width: "100%", padding: "60px" }}
            controls
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <div
            className="carousel"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="inner">
              <Slider
                {...sliderTopSettings}
                ref={sliderTop}
                className="SliderTop"
              >
                {imagesArray.map((item, index) => (
                  <div
                    key={shortid.generate()}
                    className="column"
                    onClick={() => handleImageClick(index)}
                  >
                    <img
                      className="sliderTopUnique_IMG"
                      src={item}
                      style={{ padding: "60px" }}
                      alt="carousel-item"
                    />
                  </div>
                ))}
              </Slider>
            </div>

            <div
              className="carousel-buttons"
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <img
                className="button-arrow"
                onClick={() => handleArrowClick("prec")}
                src={!isLight ? ArrowLeftWhite : ArrowLeftBlack}
                alt=""
                style={{ width: "20px" }}
              />
              <img
                className="button-arrow"
                onClick={() => handleArrowClick("suiv")}
                src={!isLight ? ArrowRightWhite : ArrowRightBlack}
                alt=""
                style={{ width: "20px" }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectsPhoto;
