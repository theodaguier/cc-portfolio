import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

import "../styles/pages/gallery.scss";
import shortid from "shortid";

import images_gallery from "../data/images_gallery.js";

function ScrollGalleryImage({ onImageClick, setIsHovering }) {
  const [images, setImages] = useState(images_gallery.slice(0, 12));
  const [imageIndex, setImageIndex] = useState(0);

  const [items, setItems] = useState(images.slice(0, 20));

  const loadMore = () => {
    setTimeout(() => {
      setItems((prevState) => [
        ...prevState,
        ...images.slice(
          prevState.length % images.length,
          (prevState.length % images.length) + 20
        ),
      ]);
    }, 500);
  };

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={true}
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
