import "./../styles/pages/gallery.scss";
import ScrollGalleryImage from "../components/ScrollGalleryImage";
import SelectedImage from "../components/SelectedImage";
import { useState } from "react";
import Header from "../components/Header";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  function handleImageClick(image) {
    setSelectedImage(image);
  }

  return (
    <div className="gallery">
      <Header />
      <SelectedImage selectedImage={selectedImage} />
      <ScrollGalleryImage onImageClick={handleImageClick} />
    </div>
  );
}

export default Gallery;
