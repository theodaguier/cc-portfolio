import React, { useEffect, useRef } from "react";
import shortid from "shortid";
import images_gallery from "../data/images_gallery.js";

const ScrollGalleryImage = () => {
  // cette galerie d'image importés depuis un fichier json
  // cette galerie doit un etre un scroll vertical
  // la galerie doit repeter à l'infini les images
  // avec un effet de smooth scroll

  const scrollGallery = useRef(null);

  useEffect(() => {
    const scrollGalleryRef = scrollGallery.current;
    const scrollGalleryRefWidth = scrollGalleryRef.offsetWidth;
    const scrollGalleryRefHeight = scrollGalleryRef.offsetHeight;
    const scrollGalleryRefChildren = scrollGalleryRef.children;
    const scrollGalleryRefChildrenLength = scrollGalleryRefChildren.length;

    // on ajoute les images à la fin de la galerie
    for (let i = 0; i < scrollGalleryRefChildrenLength; i++) {
      scrollGalleryRef.appendChild(scrollGalleryRefChildren[i].cloneNode(true));
    }

    // on ajoute les images au debut de la galerie
    for (let i = 0; i < scrollGalleryRefChildrenLength; i++) {
      scrollGalleryRef.insertBefore(
        scrollGalleryRefChildren[i].cloneNode(true),
        scrollGalleryRef.firstChild
      );
    }

    // on positionne la galerie au milieu
    scrollGalleryRef.style.transform = `translate3d(-${scrollGalleryRefWidth}px, -${scrollGalleryRefHeight}px, 0)`;

    // on ajoute un event listener sur la galerie
    scrollGalleryRef.addEventListener("scroll", () => {
      // on recupere la position de la galerie
      const scrollGalleryRefScrollLeft = scrollGalleryRef.scrollLeft;
      const scrollGalleryRefScrollTop = scrollGalleryRef.scrollTop;

      // on verifie si la galerie est au debut ou a la fin
      if (
        scrollGalleryRefScrollLeft <= 0 ||
        scrollGalleryRefScrollLeft >=
          scrollGalleryRef.scrollWidth - scrollGalleryRefWidth
      ) {
        scrollGalleryRef.scrollLeft = scrollGalleryRefWidth;
      }

      if (
        scrollGalleryRefScrollTop <= 0 ||
        scrollGalleryRefScrollTop >=
          scrollGalleryRef.scrollHeight - scrollGalleryRefHeight
      ) {
        scrollGalleryRef.scrollTop = scrollGalleryRefHeight;
      }
    });
  }, []);

  return (
    <div className="scroll-gallery" ref={scrollGallery}>
      {images_gallery.map((img) => (
        <img src={img.src} key={shortid.generate()} />
      ))}
    </div>
  );
};

export default ScrollGalleryImage;
