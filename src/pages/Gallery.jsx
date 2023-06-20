import "./../styles/pages/gallery.scss";

import ScrollGalleryImage from "../components/ScrollGalleryImage";
import SelectedImage from "../components/SelectedImage";
import { useState } from "react";

import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import { GalleryImages } from "../components/GalleryImages";

function Gallery({
  isLight,
  setLight,
  showAbout,
  setShowAbout,
  isHovering,
  setIsHovering,
}) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="gallery" style={{ overflow: "scroll", height: "100%" }}>
      <Header
        isLight={isLight}
        setLight={setLight}
        setShowAbout={setShowAbout}
        showAbout={showAbout}
      />
      {showAbout && (
        <About
          isLight={isLight}
          setLight={setLight}
          setShowAbout={setShowAbout}
          showAbout={showAbout}
        />
      )}
      <GalleryImages />
      {/* <SelectedImage
        isHovering={isHovering}
        setIsHovering={setIsHovering}
        selectedImage={selectedImage}
      /> */}
      {/* <ScrollGalleryImage
        isHovering={isHovering}
        setIsHovering={setIsHovering}
        onImageClick={handleImageClick}
      /> */}
      <Footer />
    </div>
  );
}

export default Gallery;
