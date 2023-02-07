import React, { useEffect, useRef } from "react";
import shortid from "shortid";
import Lenis from "@studio-freight/lenis";
import images_gallery from "../data/images_gallery.js";

const ScrollGalleryImage = ({ children, smooth, infinite }) => {
  const rafRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smooth,
      infinite,
    });

    rafRef.current = (time) => {
      lenis.raf(time);
      requestAnimationFrame(rafRef.current);
    };

    requestAnimationFrame(rafRef.current);

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, [smooth, infinite]);

  return (
    <div
      className="scroll-gallery lenis"
      ref={rafRef}
      data-lenis-scroll
      data-lenis-prevent
    >
      {children}
    </div>
  );
};

const RepeatItems = () => {
  const parentElRef = useRef(null);

  useEffect(() => {
    const items = [...parentElRef.current.children];
    for (let i = 0; i <= 6 - 1; ++i) {
      const cln = items[i].cloneNode(true);
      parentElRef.current.appendChild(cln);
    }
  }, []);

  return (
    <ScrollGalleryImage smooth={true} infinite={true}>
      <div
        className="scroll-gallery lenis"
        ref={parentElRef}
        data-lenis-scroll
        data-lenis-prevent
      >
        {images_gallery.map((img) => (
          <img src={img.src} key={shortid.generate()} />
        ))}
      </div>
    </ScrollGalleryImage>
  );
};

export default RepeatItems;
