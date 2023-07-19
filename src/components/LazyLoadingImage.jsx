import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

export default function LazyLoadingImage({ src }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true); // Utiliser "onload" avec la lettre "l" en minuscule
    img.src = src;
  }, [src]);

  return (
    <>
      {/* Utilisez imageLoaded pour afficher le Blurhash ou l'image réelle */}
      {!imageLoaded && (
        <div className="blurhash">
          <Blurhash
            hash="00PPWK"
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        </div>
      )}
      {imageLoaded && (
        <img onLoad={() => setImageLoaded(true)} src={src} alt="image" />
      )}
    </>
  );
}
