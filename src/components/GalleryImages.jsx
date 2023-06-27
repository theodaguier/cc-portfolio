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
    <Media query="(max-width: 768px)">
      {(matches) => (
        <div className="gallery-container">
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
