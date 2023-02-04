import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

import "../styles/pages/gallery.scss";
import shortid from "shortid";

import images_gallery from "../data/images_gallery.js";

const LIMIT = 20;

function ScrollGalleryImage({ onImageClick }) {
  const [images, setImages] = useState(images_gallery);
  const [items, setItems] = useState(images.slice(0, LIMIT));
  const [hoverIndex, setHoverIndex] = useState(-1);

  const loadMore = () => {
    setTimeout(() => {
      setItems((prevState) => {
        const newImages = prevState.concat(images.slice(0, LIMIT));
        setImages(images.slice(LIMIT));
        return newImages;
      });
    }, 500);
  };

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(-1);
  };

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={images.length > 0}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
    >
      <div className="scroll-gallery">
        {items.map((image, index) => {
          return (
            <img
              key={shortid.generate()}
              src={image.src}
              onClick={() => onImageClick(image)}
              style={{
                filter: hoverIndex === index ? "grayscale(0)" : "grayscale(1)",
                WebkitFilter:
                  hoverIndex === index ? "grayscale(0)" : "grayscale(1)",
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              alt="image"
            />
          );
        })}
      </div>
    </InfiniteScroll>
  );
}

export default ScrollGalleryImage;
