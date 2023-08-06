import { motion } from "framer-motion";
import { useRef, useState } from "react";

const MenuCard = ({ image, name, ingredients, sku, options, price }) => {
  const selectionRef = useRef();
  const [_price, setPrice] = useState(price[0]);

  return (
    <motion.div
      className="menu-card"
      layout
      initial={{ opacity: 0.4, scale: 0.4, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{
        opacity: 0.4,
        scale: 0.4,
        y: 50,
        transition: { duration: 0.2, ease: "easeIn" },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <img src={image} alt="food item" className="menu-card__img" />
      <h3 className="menu-card__title">{name}</h3>
      <p className="menu-card__ingredients">{ingredients}</p>
      <div className="menu-card__price-box">
        <select
          ref={selectionRef}
          onChange={(e) => setPrice(price[e.target.selectedIndex])}
          name={`food-item-${sku}`}
          className="menu-card__food-item"
        >
          {options.map((el) => (
            <option value={el}>{el}</option>
          ))}
        </select>
        <p className="menu-card__price">${_price.toFixed(2)}</p>
      </div>
    </motion.div>
  );
};

export default MenuCard;
