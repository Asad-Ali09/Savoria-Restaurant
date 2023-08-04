import { BsFillCartFill } from "react-icons/bs";
import heroImg from "../assets/hero-img.png";
import heroShape01 from "../assets/hero_shape_01.png";
import heroShape02 from "../assets/hero_shape_02.png";
import heroShape03 from "../assets/hero_shape_03.png";
import { AiOutlineCheck } from "react-icons/ai";
import { useRef } from "react";
import FoodCard from "../components/FoodCard";
// Food Card Images
import foodCardImg01 from "../assets/food-card-01.png";
import foodCardImg02 from "../assets/food-card-02.png";
import foodCardImg03 from "../assets/food-card-03.png";
import Menu from "../components/Menu";

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

      {/* Food Menu */}
      <Menu />
    </>
  );
};

export default Home;
