import React, { useState, useEffect, useRef } from "react";
import "../styles/pages/gallery.scss";
import shortid from "shortid";

import images_gallery from "../data/images_gallery.js";

function ScrollGalleryImage({ onImageClick, isHovering, setIsHovering }) {
  const [images, setImages] = useState(images_gallery);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollableElement = useRef(null);

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.target.scrollTop === 0) {
        setCurrentIndex((prevState) => prevState - 1);
      } else if (
        e.target.scrollHeight - e.target.scrollTop ===
        e.target.clientHeight
      ) {
        setCurrentIndex((prevState) => prevState + 1);
      }
    };
    if (scrollableElement.current) {
      scrollableElement.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollableElement.current) {
        scrollableElement.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [currentIndex]);

  const handleClick = (image) => {
    onImageClick(image);
  };

  return (
    <div className="scroll-gallery" ref={scrollableElement}>
      {images.map((image, index) => (
        <img
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
          key={shortid.generate()}
          src={image.src}
          onClick={() => handleClick(image)}
          alt="image"
          style={{ transform: `translateX(${currentIndex * 100}%)` }}
        />
      ))}
    </div>
  );
}

export default ScrollGalleryImage;
