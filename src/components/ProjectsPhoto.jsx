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
  const imagesArray = project ? Object.values(project.images) : [];

  const [activeIndex, setActiveIndex] = useState(0);
  const [xRotate, setXRotate] = useState(0);
  const [yRotate, setYRotate] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const nextIndex = currentImageIndex + 1;
    if (nextIndex + 1 === imagesArray.length) {
      setActiveIndex(0);
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(nextIndex);
      if (nextIndex > imagesArray.length - 2) {
        setActiveIndex(activeIndex + 1);
      }
    }
  };
  const prevImage = () => {
    const prevIndex = currentImageIndex - 1;
    if (prevIndex < 0) {
      setActiveIndex(Math.floor((imagesArray.length - 1) / 2));
      setCurrentImageIndex(Math.floor((imagesArray.length - 1) / 2));
    } else {
      setActiveIndex(activeIndex - 1);
      setCurrentImageIndex(prevIndex);
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
          <div
            className="inner"
            style={{ transform: `translate(-${activeIndex * 50}%)` }}
          >
            {imagesArray
              .slice(currentImageIndex, currentImageIndex + imagesArray.length)
              .map((item) => {
                return <CarouselItem item={item} width={"50%"} />;
              })}
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
                prevImage();
              }}
              src={!isLight === true ? ArrowLeftWhite : ArrowLeftBlack}
              alt=""
              style={{ width: "20px" }}
            />
            <img
              className="button-arrow"
              onClick={() => {
                nextImage();
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
