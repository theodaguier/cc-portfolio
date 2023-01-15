import { useState, useEffect, useRef } from "react";

import "../styles/pages/gallery.scss";
import shortid from "shortid";

import images_gallery from "../data/images_gallery.js";

function ScrollGalleryImage({ onImageClick, setIsHovering }) {
  const [images, setImages] = useState(images_gallery);
  const imagesContainerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (index >= images_gallery.length) {
      setIndex(0);
    }
  }, [index]);

  const fetchMore = () => {
    if (index >= images_gallery.length) {
      setIndex(0);
      setHasMore(false);
    } else {
      setImages((prevImages) => [
        ...prevImages,
        ...images_gallery.slice(index, index + 12),
      ]);
      setIndex((prevIndex) => prevIndex + 12);
    }
  };

  const imageRefs = useRef([]).current;
  const addImageRef = (imageRef) => {
    imageRefs.push(imageRef);
  };

  const handleMouseOver = (index) => {
    setIsHovering(true);
    imageRefs[index].current.classList.add("hover");
  };

  const handleMouseOut = (index) => {
    setIsHovering(false);
    imageRefs[index].current.classList.remove("hover");
  };

  const handleScroll = () => {
    const el = imagesContainerRef.current;
    if (el) {
      const { scrollTop, clientHeight, scrollHeight } = el;
      if (scrollTop + clientHeight >= scrollHeight && hasMore) {
        fetchMore();
      }
    }
  };

  return (
    <div
      className="scroll-gallery"
      ref={imagesContainerRef}
      onScroll={handleScroll}
    >
      {images.map((image, index) => {
        const imageRef = useRef(null);
        addImageRef(imageRef);
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
