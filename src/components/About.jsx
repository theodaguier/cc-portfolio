import CustomCursor from "./../utils/CustomCursor";

import arrowDRB from "./../assets/icons/arrow.up.right.black.svg";
import arrowDRW from "./../assets/icons/arrow.up.right.white.svg";

import sun from "./../assets/icons/sun.svg";
import moon from "./../assets/icons/moon.svg";

export default function About({ isLight, setLight, showAbout, setShowAbout }) {
  const toggleLight = () => {
    setLight(!isLight);
    if (isLight) {
      document.querySelector(".App").classList.remove("light");
    } else {
      document.querySelector(".App").classList.add("light");
    }
    localStorage.setItem("isLight", !isLight.toString());
  };

  return (
    <div className="about">
      <div className="about-buttons">
        <div className="close-mobile">
          <p onClick={() => setShowAbout(!showAbout)}>Close</p>
        </div>
        {/* <img
          className="icon about"
          src={isLight ? moon : sun}
          alt="sun"
          onClick={toggleLight}
        /> */}
      </div>
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
              src={isLight ? arrowDRB : arrowDRW}
              alt="icon"
            />{" "}
            Contact
          </p>
          <div className="paragraph">
            <a href="mailto:info@cristinacasanas.com">
              info@cristinacasanas.com{" "}
            </a>
          </div>
          <div className="paragraph">
            <a href="sms:/+33656698355"> FR +33 0656698355</a>
          </div>
          <div className="paragraph">
            <a href="sms:/+34638419385"> ES +34 638419385</a>
          </div>
          <div className="paragraph">
            <a
              href="https://www.instagram.com/casanascristine/"
              target="_blank"
            >
              instagram
            </a>
          </div>
          <div className="paragraph">
            <a
              href="https://www.behance.net/cristinacasaas?tracking_source=search_projects%7Coracle"
              target="_blank"
            >
              behance
            </a>
          </div>
          <div className="paragraph">
            <a
              href="https://drive.google.com/file/d/1Xe_lj7vFDpEHbnSB_pa5nhwnSu2FmMpq/view?usp=sharing"
              target="_blank"
            >
              resume (download here)
            </a>
          </div>
        </div>
        <div className="section">
          <p className="paragraph">
            <img
              className="arrow"
              src={isLight ? arrowDRB : arrowDRW}
              alt="icon"
            />{" "}
            Awards
          </p>
          <p className="paragraph">
            <a
              href="https://news.baued.es/index.php/2020/10/21/cristina-casanas-5o-premio-en-el-concurso-etiquetanews/"
              target="_blank"
            >
              Etiqueta News 2020
            </a>
          </p>
        </div>
        <div className="section">
          <p className="paragraph">
            <img
              className="arrow"
              src={isLight ? arrowDRB : arrowDRW}
              alt="icon"
            />{" "}
            Press
          </p>
          <div className="paragraph">
            <a
              href="https://news.baued.es/index.php/2020/11/02/las-etiquetas-de-vino-mas-inspiradoras-reunidas-en-una-exposicion/"
              target="_blank"
            >
              Bau News
            </a>
          </div>
        </div>
        <div className="section">
          <p className="paragraph">
            Web Developer:{" "}
            <span className="underline">
              <a href="https://www.theodaguier.com" target="_blank">
                Théo Daguier
              </a>
            </span>
          </p>
        </div>
      </div>

      <div className="row">
        <div className="section">
          <div className="paragraph">
            © 2023 Cristina Casañas.
            <p className="paragraph">
              All rights reserved. All designs, concepts, and artwork produced
              by Cristina Casañas are protected by copyright law and may not be
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
