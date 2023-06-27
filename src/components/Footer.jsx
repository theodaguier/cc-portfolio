import "./../styles/components/footer.scss";

import arrowUB from "./../assets/icons/arrow.up.black.svg";
import arrowUW from "./../assets/icons/arrow.up.white.svg";

function Footer({ isLight }) {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="wrapper">
        <div className="block">
          <h3>Cristina Casañas</h3>
        </div>
        <div className="block" style={{ justifyContent: "center" }}>
          <div className="inner">
            <h3>Paris, Fr</h3>
            <a href="sms:/+33656698355"> FR +33 0656698355</a>
          </div>
        </div>
        <div className="block" style={{ justifyContent: "center" }}>
          <div className="inner">
            <a
              href="https://www.behance.net/cristinacasaas?tracking_source=search_projects%7Coracle"
              target="_blank"
            >
              Behance
            </a>
            <a
              href="https://www.instagram.com/casanascristine/"
              target="_blank"
            >
              instagram
            </a>
            <a href="mailto:info@cristinacasanas.com">email</a>
          </div>
        </div>
        <div className="block" style={{ justifyContent: "right" }}>
          <div className="inner">
            <h3>Cristina Casañas</h3>
            <h3>© 2023</h3>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
