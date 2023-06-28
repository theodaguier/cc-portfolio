import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import shortid from "shortid";
import images_gallery from "../data/images_gallery.js";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

const ScrollGalleryImage = () => {
  const [images, setImages] = useState([...images_gallery, ...images_gallery]); // duplicate the array of images
  const containerRef = useRef(null);
  const imageHeight = 200; // height of each image in pixels

  useEffect(() => {
    const container = containerRef.current;
    const containerHeight = container.getBoundingClientRect().height;

    // Wait for the DOM to be loaded before initializing Locomotive Scroll
    window.addEventListener("load", () => {
      // set initial scroll position to show the images from the top
      container.scrollTop = 0;

      // Scroll to the beginning of the container when we reach the end
      container.addEventListener("scroll", () => {
        if (container.scrollTop === 0) {
          container.scrollTop = container.scrollHeight / 2;
        } else if (
          container.scrollTop + containerHeight >=
          container.scrollHeight
        ) {
          container.scrollTop = container.scrollHeight / 2 - containerHeight;
        }
      });
    });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const containerHeight = container.getBoundingClientRect().height;
    const imagesHeight = images.length * imageHeight;

    gsap.to(container, {
      y: `+=${imagesHeight}`,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `+=${imagesHeight - containerHeight}`,
        scrub: true,
      },
    });

    // Add a simple rotation animation to the first image in the list
    gsap.to(images[0], {
      duration: 2,
      rotate: 360,
      repeat: -1,
      ease: "none",
    });
  }, [images]);

  return (
    <div
      className="scroll-gallery"
      ref={containerRef}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowY: "auto",
        height: "100vh",
      }}
    >
      <div style={{ height: `${imageHeight}px` }} />{" "}
      {/* empty div to adjust the top position */}
      {images.map((img, index) => (
        <img
          src={img.src}
          key={index}
          style={{
            height: `${imageHeight}px`,
            width: "100%",
            marginBottom: "10px",
          }}
        />
      ))}
    </div>
  );
};

export default ScrollGalleryImage;
