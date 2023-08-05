import Menu from "../components/Menu";
import { BsFillCartFill } from "react-icons/bs";
import { useRef } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { ImArrowRight2 } from "react-icons/im";

import heroImg from "../assets/hero-img.png";
import heroShape01 from "../assets/hero_shape_01.png";
import heroShape02 from "../assets/hero_shape_02.png";
import heroShape03 from "../assets/hero_shape_03.png";
import FoodCard from "../components/FoodCard";
// Food Card Images
import foodCardImg01 from "../assets/food-card-01.png";
import foodCardImg02 from "../assets/food-card-02.png";
import foodCardImg03 from "../assets/food-card-03.png";
// Section CTA Images
import pizza40Off from "../assets/40off.png";
//About Section Images
import aboutImg01 from "../assets/about-pizzaw.png";
import aboutShape01 from "../assets/about-pizzaw-shape-01.png";
import aboutShape02 from "../assets/about-pizzaw-shape-02.png";
import aboutImg02 from "../assets/about-burger.png";
import aboutShape03 from "../assets/about-burger-shape.png";
import aboutShape04 from "../assets/about-burger-shape-02.png";
import Counter from "../components/Counter";

const foodCards = [
  {
    title: "Maxican Pizza",
    image: foodCardImg01,
  },
  {
    title: "Soft Drinks",
    image: foodCardImg02,
  },
  {
    title: "French Fry",
    image: foodCardImg03,
  },
];

const Home = () => {
  //Refernce to images in hero section
  const shapeRefs = useRef([]);

  const handleMouseMove = (e) => {
    // Creating animations for shapes in hero section on mouse move
    const pageWidth = window.innerWidth;
    const x = e.pageX / pageWidth;
    // the translate limit is between -20% to 10%
    const lowerBound = -20;
    const upperbound = 10;
    const move = lowerBound + x * (upperbound - lowerBound);
    shapeRefs.current[0].style.transform = `translateX(${-move}%)`;
    shapeRefs.current[1].style.transform = `translateX(${-move}%)`;
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero" onMouseMove={handleMouseMove}>
        {/* Hero Section Content */}
        <div className="hero__content-box">
          <div className="hero__tag">free home delivery 24 hours</div>
          <h1 className="heading__primary">Enjoy your pizza in town!</h1>
          <ul className="hero__list">
            <li className="hero__list__item">
              <span>
                <AiOutlineCheck />
              </span>
              Lorem, ipsum dolor
            </li>
            <li className="hero__list__item">
              <span>
                <AiOutlineCheck />
              </span>
              dolor sit amet ipsum
            </li>
            <li className="hero__list__item">
              <span>
                <AiOutlineCheck />
              </span>
              elit Expedita necessi
            </li>
          </ul>
          <button className="btn btn__primary">
            <BsFillCartFill />
            order now
          </button>
        </div>

        {/* Hero Section Images */}
        <div className="hero__img-box">
          <img src={heroImg} alt="pizza" className="hero__img--main" />

          <img
            src={heroShape02}
            alt="shape 2"
            className="hero__img__shape hero__img__shape--02"
            ref={(el) => (shapeRefs.current[0] = el)}
          />
          <img
            src={heroShape03}
            alt="shape 3"
            className="hero__img__shape hero__img__shape--03"
            ref={(el) => (shapeRefs.current[1] = el)}
          />
        </div>
      </div>

      {/* End of Hero Section */}

      {/* Food Cards Section */}
      <section className="section-food-cards">
        {foodCards.map((el) => (
          <FoodCard title={el.title} image={el.image} />
        ))}
      </section>

      {/* Food Menu Section */}
      <Menu />

      {/* Section CTA*/}
      <section className="section-cta">
        <div className="section-cta__content">
          <h1 className="heading__primary heading__primary--sub">
            we have <span className="text-primary">excellent</span> <br />
            of <span className="text-primary">quality</span> pizza
          </h1>
          <button className="btn btn__primary btn__primary--red">
            <span>See all menu</span>
            <span className="btn--arrow">
              <ImArrowRight2 />
            </span>
          </button>
        </div>

        <div className="section-cta--img">
          <img src={pizza40Off} alt="pizza" />
          <div className="section-cta__shape">
            <span className="section-cta__shape--text">
              <span className="text-secondary"> 40%</span>
              off
            </span>
          </div>
        </div>
      </section>

      {/* Section About 1 */}
      <section className="section-about section-about--1">
        <div className="section-about__image">
          <img src={aboutImg01} alt="burger" />
          <img
            src={aboutShape01}
            alt="shape"
            className="section-about__shape section-about__shape-1"
          />
        </div>
        <div className="section-about__content">
          <h2 className="section-about__heading--primary">
            Panpie, Burgers, And <br /> Best Pizzas in Town
          </h2>
          <h3 className="section-about__heading--sub">
            We put 100% of love and dedication into our dishes
          </h3>
          <p className="section-about__text">
            Piorem ipsum dolor sit amet consectetur adipiscing eliturabitur
            venenatis, nisl in bib endum commodo, sapien justo cursus are urna,
            quis porta mauris elit finibus nulla.
          </p>
          <button className="btn btn__primary btn__primary--red">
            <span>Know more</span>
            <span>
              <ImArrowRight2 />
            </span>
          </button>
        </div>

        <img
          src={aboutShape02}
          alt="shape"
          className="section-about__shape section-about__shape-2"
        />
      </section>

      {/* Section About 2 */}
      <section className="section-about section-about--2">
        <div className="section-about__image">
          <img src={aboutImg02} alt="burger" />
        </div>
        <div className="section-about__content">
          <h2 className="section-about__heading--primary">
            Chicken <br /> King Burger
          </h2>

          <p className="section-about__text">
            Piorem ipsum dolor sit amet consecte eliturabitur venenatis, nisl in
            bib endum commodo, sapien eusto cursus are urnainibus.
          </p>
          <button className="btn btn__primary ">
            <span>Order Now</span>
            <span>
              <ImArrowRight2 />
            </span>
          </button>
        </div>

        <img
          src={aboutShape03}
          alt="shape"
          className="section-about__shape section-about__shape-3"
        />
        <img
          src={aboutShape04}
          alt="shape"
          className="section-about__shape section-about__shape-4"
        />
      </section>

      {/* Section Counter */}
      <Counter />
    </>
  );
};

export default Home;
