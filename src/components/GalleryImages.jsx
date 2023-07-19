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
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            illum doloremque vero ab odit ullam, dolor illo optio est
            consectetur quia eligendi ad quasi culpa libero quis hic, deserunt
            non! Quasi enim quaerat, laudantium ullam recusandae molestiae
            possimus iusto totam architecto cum? Totam alias odit dolorem
            officia perferendis quas maiores voluptatem aut illum rem ipsa,
            dolore qui! Ratione, sed qui. Dignissimos at ea eaque quaerat sequi
            error tenetur nam suscipit aliquam repellat, provident earum,
            distinctio blanditiis magni laborum ducimus obcaecati ab tempore
            perferendis quae eveniet laboriosam praesentium! In, iusto sapiente!
            Illum fugit, rerum quaerat quos ad repellendus cumque error quae,
            aliquid quis adipisci. Ullam enim at provident doloribus ex
            doloremque itaque voluptatem porro, mollitia, corrupti illum tempore
            necessitatibus asperiores perspiciatis! Unde voluptatibus voluptas
            optio odit at deleniti reiciendis, dicta voluptatem necessitatibus
            amet quo eius distinctio labore quos quas soluta debitis! Placeat
            autem fugiat repudiandae architecto quaerat dicta ullam sunt minus?
            Aut quas pariatur dignissimos exercitationem quasi, nostrum eveniet
            totam natus assumenda sunt similique fugit, voluptate et, cumque
            eaque ab earum rem quam. Quibusdam veniam quod et mollitia deleniti?
            Et, delectus. Saepe iure quas, sit voluptates eligendi iste fuga
            quaerat? Dignissimos, fugit doloribus? Nesciunt temporibus deserunt
            sunt magnam delectus soluta fugit incidunt praesentium excepturi
            sapiente? Voluptas nam et esse iure corrupti? Modi voluptatibus
            ipsum non reprehenderit eveniet consequuntur quas corporis vitae
            iure accusamus odio provident fugiat laboriosam atque illo quibusdam
            corrupti vel vero error quam, explicabo quaerat maiores? Quas,
            debitis nisi? Minima possimus natus rerum voluptatum, itaque a
            distinctio repudiandae placeat sed, perspiciatis ipsum molestiae ut
            commodi. Dolor necessitatibus temporibus, voluptatibus amet tenetur
            velit saepe vero facilis excepturi repudiandae et mollitia.
            Veritatis eaque magni sint est facilis temporibus, libero corporis
            ipsam, delectus voluptates quam soluta minima architecto.
            Voluptatem, aperiam! A minus dolorum praesentium consequuntur vero.
            Possimus corrupti facere aliquid blanditiis sit.
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
