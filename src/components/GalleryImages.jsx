import Media from "react-media";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useState } from "react";

import images_gallery from "../data/images_gallery";

export const GalleryImages = () => {
  const [dominantColors, setDominantColors] = useState([]);

  useEffect(() => {
    const fetchDominantColors = async () => {
      const colors = await Promise.all(
        images_gallery.map((image) => getColor(image.src))
      );
      setDominantColors(colors);
    };

    fetchDominantColors();
  }, []);

  const images_gallery_filtered = images_gallery.filter(
    (image) => image.number
  );

  return (
    <Media query="(max-width: 950px)">
      {(matches) => (
        <div className="gallery-container">
          <p style={{ paddingBottom: "20px" }}>
            Welcome to the Photography section of my portfolio. As a passionate
            graphic designer with a keen eye for aesthetics and visual
            storytelling, I find great joy in translating the world around me
            into captivating images. Photography has been an integral part of my
            creative journey because it enables me to channel and express my
            creativity. Infusing a graphic designer's perspective into my
            photography, I strive to go beyond merely capturing reality. By
            skillfully playing with colors, contrast, and texture, I aim to
            craft images that evoke a unique and emotive response, seamlessly
            blending the art of photography with graphic design. Now, I am
            thrilled to share some of the images I have captured through the
            lens.
          </p>
          <div className="grid">
            {(!matches ? images_gallery : images_gallery_filtered).map(
              (image, index) => (
                <div
                  className="image-wrapper"
                  style={{ flexBasis: matches ? image.mobile : image.flex }}
                  key={index}
                >
                  <div className="caption">
                    <h3>{image.number}</h3>
                    <br />
                    <h2>{image.serie}</h2>
                  </div>

                  <div className="responsive-img">
                    <LazyLoadImage
                      src={image.src}
                      alt="gallery"
                      effect="blur"
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </Media>
  );
};
