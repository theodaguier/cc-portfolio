import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

import "../styles/pages/gallery.scss";
import shortid from "shortid";

import images_gallery from "../data/images_gallery.js";

const LIMIT = 20;

function ScrollGalleryImage({ onImageClick, setIsHovering }) {
  const [images, setImages] = useState(images_gallery);
  const [items, setItems] = useState(images.slice(0, LIMIT));

  const loadMore = () => {
    setTimeout(() => {
      setItems((prevState) => {
        const newImages = prevState.concat(images.slice(0, LIMIT));
        setImages(images.slice(LIMIT));
        return newImages;
      });
    }, 500);
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
              alt="image"
            />
          );
        })}
      </div>
    </InfiniteScroll>
  );
}

export default ScrollGalleryImage;
