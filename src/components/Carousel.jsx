import { useState } from "react";

const Carousel = ({ image }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % image.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? image.length - 1 : currentImageIndex - 1
    );
  };

  return (
    <div>
      <img src={image[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
      <div>
        <button onClick={handlePrevImage}>Previous</button>
        <button onClick={handleNextImage}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
