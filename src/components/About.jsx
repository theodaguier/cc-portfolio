import "./../styles/components/about.scss";

import arrowDRB from "./../assets/icons/arrow.up.right.black.svg";
import arrowDRW from "./../assets/icons/arrow.up.right.white.svg";

function About({ isLight, setLight }) {
  return (
    <div className={`about ${!isLight ? "white" : "black"}`}>
      <div className="text-container">
        <div className="presentation">
          <p className="paragraph">
            I am Cristina Casañas, a graphic designer based between Paris and
            Barcelona.
          </p>
          <p className="paragraph">
            I believe that good design has the power to inspire and connect.I am
            always seeking to create something that speaks to the heart and
            captivates the imagination. It is my goal to create designs that do
            just that.
          </p>
          <p className="paragraph">
            I have a keen interest in experimentation, visual storytelling, and
            creating extraordinary objects, packaging, textile design,
            photography,and art direction. My work spans across all formats,
            with a focus on both printed and online projects. I enjoy exploring
            new creative avenues, such as collage and analogue photography, to
            keep my inspiration fresh.
          </p>
          <p className="paragraph">
            If you need a multidisciplinary designer who is open to creating
            brand-new projects, I am the person for you!
          </p>
        </div>
        <div className="section">
          <p className="paragraph">
            <img
              className="arrow"
              src={!isLight ? arrowDRW : arrowDRB}
              alt="icon"
            />{" "}
            Contact
          </p>
          <p className="paragraph">info@cristinacasanas.com </p>
          <p className="paragraph">FR +33 0656698355</p>
          <p className="paragraph">ES +34 638419385</p>
          <p className="paragraph">instagram</p>
          <p className="paragraph">resume (download here)</p>
        </div>
        <div className="section">
          <p className="paragraph">
            <img
              className="arrow"
              src={!isLight ? arrowDRW : arrowDRB}
              alt="icon"
            />{" "}
            Awards
          </p>
          <p className="paragraph">Etiqueta News 2020</p>
        </div>
        <div className="section">
          <p className="paragraph">
            <img
              className="arrow"
              src={!isLight ? arrowDRW : arrowDRB}
              alt="icon"
            />{" "}
            Press
          </p>
          <p className="paragraph">Bau News</p>
        </div>
        <div className="section">
          <p className="paragraph">
            Web Developer: <span className="underline">Théo Daguier</span>
          </p>
        </div>
        <div className="section">
          <div className="paragraph">
            © 2023 Cristina Casañas.
            <p className="paragraph">
              All rights reserved All designs, concepts, and artwork produced by
              Cristina Casañas are protected by copyright law and may not be
              used, reproduced, or distributed without the express written
              permission of the artist. Unauthorized use of these materials will
              be subject to legal action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
