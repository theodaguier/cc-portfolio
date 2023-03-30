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
  const sliderTop = useRef();
  const sliderBot = useRef();

  const imagesArray = project ? Object.values(project.images) : [];

  const [activeIndex, setActiveIndex] = useState(0);

  const sliderTopSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 2, // affiche deux images à la fois
    slidesToScroll: 1, // fait défiler deux images à la fois
    autoplay: true,
    autoplaySpeed: 2500,
  };

  const sliderTopNav = (direction) => {
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
        <div className="carousel">
          <div className="inner">
            <Slider
              {...sliderTopSettings}
              ref={sliderTop}
              className="SliderTop"
            >
              {imagesArray.map((item, index) => (
                <div key={shortid.generate()} className="column">
                  <img className="sliderTopUnique_IMG" src={item} />
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
              onClick={() => {
                sliderTopNav("prec");
              }}
              src={!isLight === true ? ArrowLeftWhite : ArrowLeftBlack}
              alt=""
              style={{ width: "20px" }}
            />
            <img
              className="button-arrow"
              onClick={() => {
                sliderTopNav("suiv");
              }}
              src={!isLight === true ? ArrowRightWhite : ArrowRightBlack}
              alt=""
              style={{ width: "20px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPhoto;
