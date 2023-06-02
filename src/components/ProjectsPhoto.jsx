import { useState, useRef, useEffect } from "react";
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
  const sliderTop = useRef();
  const sliderBot = useRef();

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
  };

  const sliderTopNav = (direction, event) => {
    event.preventDefault(); // Prevent the default anchor tag behavior
    event.stopPropagation();
    if (sliderTop && sliderTop.current) {
      if (direction === "prec") {
        sliderTop.current.slickPrev();
      }
      if (direction === "suiv") {
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

      <div className="images-projects">
        {project.video ? ( // Check if the project has a video URL
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
          <div className="carousel">
            <div className="inner">
              <Slider
                {...sliderTopSettings}
                ref={sliderTop}
                className="SliderTop"
              >
                {imagesArray.map((item, index) => (
                  <div key={shortid.generate()} className="column">
                    <img
                      className="sliderTopUnique_IMG"
                      src={item}
                      style={{ padding: "60px" }}
                    />
                  </div>
                ))}
              </Slider>
            </div>

            <div
              className="carousel-buttons"
              style={{
                position: "absolute",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <img
                className="button-arrow"
                onClick={(event) => {
                  event.preventDefault(); // Prevent the default anchor tag behavior
                  sliderTopNav("prec", event);
                }}
                src={!isLight === true ? ArrowLeftWhite : ArrowLeftBlack}
                alt=""
                style={{ width: "20px" }}
              />
              <img
                className="button-arrow"
                onClick={(event) => {
                  event.preventDefault(); // Prevent the default anchor tag behavior
                  sliderTopNav("suiv", event);
                }}
                src={!isLight === true ? ArrowRightWhite : ArrowRightBlack}
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
