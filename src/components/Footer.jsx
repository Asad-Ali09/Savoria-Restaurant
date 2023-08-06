import footerLogo from "../assets/savoria-light.png";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoGooglePlus,
  BiLogoLinkedin,
  BiLogoPinterestAlt,
} from "react-icons/bi";
import { motion } from "framer-motion";

import footerShape01 from "../assets/footer_shape01.png";
import footerShape02 from "../assets/footer_shape02.png";
import footerShape03 from "../assets/footer_shape03.png";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Shapes */}
      <motion.img
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        src={footerShape01}
        alt="footer shape"
        className="footer__shape footer__shape--1"
      />
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        src={footerShape02}
        alt="footer shape"
        className="footer__shape footer__shape--2"
      />
      <motion.img
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        src={footerShape03}
        alt="footer shape"
        className="footer__shape footer__shape--3"
      />

      <div className="footer__content">
        <div className="footer__content--1">
          <div className="footer__logo">
            <img src={footerLogo} alt="logo" />
          </div>

          <address className="footer__address">
            128 6th Ave,New York, NY 10015 United States, Dcca-1212
          </address>

          <div className="footer__links">
            <a href="#" className="footer__links--item">
              <BiLogoFacebook />
            </a>
            <a href="#" className="footer__links--item">
              <BiLogoTwitter />
            </a>
            <a href="#" className="footer__links--item">
              <BiLogoGooglePlus />
            </a>
            <a href="#" className="footer__links--item">
              <BiLogoLinkedin />
            </a>

            <a href="#" className="footer__links--item">
              <BiLogoPinterestAlt />
            </a>
          </div>
        </div>

        <div className="footer__content--2">
          <h3 className="footer__heading">Hot Menu</h3>

          <ul className="footer__list">
            <li className="footer__item">BBQ Pizza TinTin</li>
            <li className="footer__item">Burger Kingo</li>
            <li className="footer__item">Chessey Pizza</li>
            <li className="footer__item">Chicken Sandwich</li>
            <li className="footer__item">Grill Burger</li>
          </ul>
        </div>

        <div className="footer__content--3">
          <h3 className="footer__heading">Opening Hours</h3>

          <ul className="footer__list">
            <li className="footer__item">
              Monday :{" "}
              <span className="footer__list--active">10:00am - 05:00pm</span>
            </li>
            <li className="footer__item">
              Tuesday :{" "}
              <span className="footer__list--active">10:00am - 05:00pm</span>
            </li>
            <li className="footer__item">
              Wednesday :{" "}
              <span className="footer__list--active">10:00am - 05:00pm</span>
            </li>
            <li className="footer__item">
              Thursday :{" "}
              <span className="footer__list--active">10:00am - 05:00pm</span>
            </li>
            <li className="footer__item">
              Friday : <span className="footer__list--close">Closed</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright__wrap">
        <span className="line line--left"></span>
        <div className="footer__copyright">
          &copy; Design by{" "}
          <a href="http://radiusthemes.com" target="blank">
            radiusthemes
          </a>
        </div>
        <span className="line line--right"></span>
      </div>
    </footer>
  );
};

export default Footer;
