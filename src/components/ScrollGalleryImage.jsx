import { useState, useEffect, useRef, useMemo } from "react";

import "../styles/pages/gallery.scss";
import shortid from "shortid";

import images_gallery from "../data/images_gallery.js";

function ScrollGalleryImage({ onImageClick, setIsHovering }) {
  const [images, setImages] = useState(images_gallery.slice(0, 12));
  const [index, setIndex] = useState(12);
  const [hasMore, setHasMore] = useState(true);
  const imagesContainerRef = useRef(null);

  useEffect(() => {
    if (index >= images_gallery.length) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasMore) {
          fetchMore();
        }
      });
    });
    observer.observe(imagesContainerRef.current);
    return () => observer.disconnect();
  }, [hasMore, imagesContainerRef]);

  const fetchMore = () => {
    if (index >= images_gallery.length) {
      setIndex(0);
    }
    setImages((prevImages) => [
      ...prevImages,
      ...images_gallery.slice(index, index + 12),
    ]);
    setIndex((prevIndex) => prevIndex + 12);
  };

  const handleMouseOver = (index) => {
    setIsHovering(true);
    images[index].isHovering = true;
    setImages([...images]);
  };

  const handleMouseOut = (index) => {
    setIsHovering(false);
    images[index].isHovering = false;
    setImages([...images]);
  };
  return (
    <div className="scroll-gallery" ref={imagesContainerRef}>
      {images.map((image, index) => {
        const imageRef = useRef(null);

        return (
          <img
            ref={imageRef}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={() => handleMouseOut(index)}
            key={shortid.generate()}
            src={image.src}
            onClick={() => onImageClick(image)}
            alt="image"
          />
        );
      })}
    </div>
  );
}

export default ScrollGalleryImage;
