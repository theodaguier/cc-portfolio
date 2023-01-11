import { useState, useEffect } from "react";
import images_gallery from "../data/images_gallery";

function SelectedImage({ selectedImage, isHovering, setIsHovering }) {
  const defaultImage = images_gallery[0];
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
  }, [selectedImage]);

  return (
    <div className="selected-image">
      <img
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
        src={selectedImage ? selectedImage.src : defaultImage.src}
        alt="img"
        className={isTransitioning ? "transitioning" : ""}
      />
    </div>
  );
}

export default SelectedImage;
