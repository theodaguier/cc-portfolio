import React, { useState, useEffect, useRef } from "react";
import "../styles/pages/gallery.scss";
import shortid from "shortid";

import images_gallery from "../data/images_gallery.js";

function ScrollGalleryImage({ onImageClick }) {
  const [images, setImages] = useState([images_gallery]);
  const originalImages = images;
  const scrollableElement = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        scrollableElement.current;
      if (scrollTop === 0) {
        // The user has scrolled to the top of the component, so we add the total height of the gallery to the scroll position
        scrollableElement.current.scrollTop += scrollHeight;
        setImages(originalImages);
      } else if (scrollTop + clientHeight >= scrollHeight) {
        // The user has scrolled to the bottom of the component, so we subtract the total height of the gallery from the scroll position
        scrollableElement.current.scrollTop -= scrollHeight;
        setImages(originalImages);
      }
    };

    scrollableElement.current.addEventListener("scroll", handleScroll);

    return () => {
      scrollableElement.current.removeEventListener("scroll", handleScroll);
    };
  }, [images]);

  return (
    <div className="scroll-gallery" ref={scrollableElement}>
      {images_gallery.map((image) => (
        <img
          key={shortid.generate()}
          src={image.src}
          onClick={() => onImageClick(image)}
          alt="image"
        />
      ))}
    </div>
  );
}

export default ScrollGalleryImage;
