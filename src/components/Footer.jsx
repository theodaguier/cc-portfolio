import "./../styles/components/footer.scss";

import arrowUB from "./../assets/icons/arrow.up.black.svg";
import arrowUW from "./../assets/icons/arrow.up.white.svg";

function Footer() {
  return (
    <div className="footer">
      <p>© 2023 Cristina Casañas. All rights reserved </p>
      <p>
        Back to top <img className="icon-up" src={arrowUW} alt="arrow" />
      </p>
    </div>
  );
}

export default Footer;
