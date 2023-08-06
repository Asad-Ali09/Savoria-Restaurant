import { Link } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo-dark.png";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleNav = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 710) setIsVisible(true);
      else setIsVisible(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const navLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header className="header">
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            variants={navVars}
            initial="initial"
            animate="animate"
            exit="exit"
            id="primary-nav"
            className="primary-nav"
            data-visible="false"
          >
            <motion.ul
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="primary-nav__list"
            >
              <div className="overflow-hidden">
                <motion.li variants={navLinkVars} className="primary-nav__item">
                  <Link to={"/"}>Home</Link>
                </motion.li>
              </div>
              <div className="overflow-hidden">
                <motion.li variants={navLinkVars} className="primary-nav__item">
                  <Link to={"/"}>Menu</Link>
                </motion.li>
              </div>
              <div className="overflow-hidden">
                <motion.li variants={navLinkVars} className="primary-nav__item">
                  <Link to={"/"}>Blog</Link>
                </motion.li>
              </div>
              <div className="overflow-hidden">
                <motion.li variants={navLinkVars} className="primary-nav__item">
                  <Link to={"/"}>Shop</Link>
                </motion.li>
              </div>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>

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
