import { Link } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo-dark.png";
import { useRef } from "react";

const Header = () => {
  const toggleRef = useRef();

  const toggleNav = () => {
    console.log("clicked");
    const bool = toggleRef.current.getAttribute("data-visible");
    console.log(bool);
    if (bool === false || bool === "false")
      toggleRef.current.setAttribute("data-visible", true);
    else toggleRef.current.setAttribute("data-visible", false);
  };

  return (
    <header className="header">
      <nav
        id="primary-nav"
        className="primary-nav"
        data-visible="false"
        ref={toggleRef}
      >
        <ul className="primary-nav__list">
          <li className="primary-nav__item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="primary-nav__item">
            <Link to={"/"}>Menu</Link>
          </li>
          <li className="primary-nav__item">
            <Link to={"/"}>Blog</Link>
          </li>
          <li className="primary-nav__item">
            <Link to={"/"}>Shop</Link>
          </li>
        </ul>
      </nav>

      <div className="header__logo-box">
        {/* TODO: Add your own logo */}
        <img src={logo} alt="Savoria" className="header__logo" />
      </div>

      <div className="header__info">
        <div className="header__info--phone">
          <FaPhoneVolume />
        </div>
        <div className="phone-info">
          <p className="phone-info__title">Hot line:</p>
          <a href="tel:+304-779-645" className="phone-info__number">
            +304-779-645
          </a>
        </div>

        <div className="header__info--cart">
          <BsFillCartFill />
        </div>
      </div>

      <button
        className="nav-toggle"
        aria-controls="primary-nav"
        aria-expanded="false"
        onClick={toggleNav}
      >
        <GiHamburgerMenu />
      </button>
    </header>
  );
};

export default Header;
