import { useState, useEffect, useRef } from "react";

import "../styles/pages/gallery.scss";
import shortid from "shortid";

import images_gallery from "../data/images_gallery.js";

function ScrollGalleryImage({ onImageClick }) {
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
      {images.map((image, index) => (
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
