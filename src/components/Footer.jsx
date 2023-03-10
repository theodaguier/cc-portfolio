import "./../styles/components/footer.scss";

import arrowUB from "./../assets/icons/arrow.up.black.svg";
import arrowUW from "./../assets/icons/arrow.up.white.svg";

function Footer({ isLight }) {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <p>© 2023 Cristina Casañas. All rights reserved </p>
      <div className="back-to-top" onClick={handleClick}>
        Back to top{" "}
        <img
          className="icon-up"
          src={!isLight ? arrowUW : arrowUB}
          alt="arrow"
        />
      </div>
    </div>
  );
}

export default Footer;
