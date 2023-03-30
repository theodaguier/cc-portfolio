import images_gallery from "../data/images_gallery";

export const GalleryImages = () => {
  return (
    <div>
      <div className="gallery-container" style={{ overflowY: "scroll" }}>
        {images_gallery.map((image, index) => (
          <div className="image-wrapper" key={index}>
            <img src={image.src} alt="gallery" />
          </div>
        ))}
      </div>
    </div>
  );
};
