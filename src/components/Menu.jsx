import { useRef, useState } from "react";
import menu from "../menu";
import MenuCard from "./MenuCard";
import { motion, AnimatePresence } from "framer-motion";

const Menu = () => {
  const [filteredMenu, setFilteredMenu] = useState(menu);
  const btnRef = useRef();

  const getFiltered = (event, category) => {
    // Removing active class from all the buttons in the button list
    const AllButtons = btnRef.current.children;
    for (const btn in AllButtons) {
      if (Object.hasOwnProperty.call(AllButtons, btn)) {
        AllButtons[btn].classList.remove("btn__menu--active");
      }
    }
    // Adding active class in the clicked button
    event.target.classList.add("btn__menu--active");

    // Filtering the List according to category
    if (!category) {
      return setFilteredMenu(menu);
    }
    const filtered = menu.filter((el) => el.categories.includes(category));
    setFilteredMenu(filtered);
  };

  return (
    <div className="section-menu">
      {/* Headings */}
      <div className="heading__secondary">
        <h2 className="heading__secondary--main">Fresh from panpie</h2>
        <h2 className="heading__secondary--sub">
          We Offer People Best Way <br /> To Eat Best Food
        </h2>
      </div>

      {/* Menu Buttons */}
      <div ref={btnRef} className="btn-list">
        <button
          onClick={(e) => getFiltered(e)}
          className="btn btn__menu btn__menu--active"
        >
          All
        </button>
        <button
          onClick={(e) => getFiltered(e, "donut")}
          className="btn btn__menu"
        >
          Donuts
        </button>
        <button
          onClick={(e) => getFiltered(e, "pizza")}
          className="btn btn__menu"
        >
          Pizza
        </button>
        <button
          onClick={(e) => getFiltered(e, "drinks")}
          className="btn btn__menu"
        >
          Drink
        </button>
        <button
          onClick={(e) => getFiltered(e, "sandwich")}
          className="btn btn__menu"
        >
          Sandwich
        </button>
      </div>

      <div className="section-menu__list">
        {filteredMenu.map((el) => (
          <MenuCard
            image={el.image}
            ingredients={el.ingredients}
            name={el.name}
            price={el.price}
            options={el.options}
            sku={el.sku}
            key={el.sku}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
