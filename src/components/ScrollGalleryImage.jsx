import React, { useEffect, useRef, useState } from "react";
import shortid from "shortid";
import images_gallery from "../data/images_gallery.js";

const ScrollGalleryImage = () => {
  const [images, setImages] = useState(images_gallery);
  const scrollGallery = useRef(null);
  const imageHeight = 300; // ajustez la hauteur des images selon vos besoins
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const scrollGalleryRef = scrollGallery.current;

    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = scrollGalleryRef;

      if (
        scrollTop + clientHeight >= scrollHeight &&
        images.length < images_gallery.length * 2
      ) {
        setImages((prevImages) => [...prevImages, ...images_gallery]);
      }
    };

    scrollGalleryRef.addEventListener("scroll", handleScroll);

    return () => {
      scrollGalleryRef.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="scroll-gallery"
      ref={scrollGallery}
      style={{
        transform: `translateY(-${scrollOffset}px)`,
      }}
    >
      {images.map((img) => (
        <img
          src={img.src}
          key={shortid.generate()}
          style={{ height: `${imageHeight}px` }}
        />
      ))}
    </div>
  );
};

export default ScrollGalleryImage;
