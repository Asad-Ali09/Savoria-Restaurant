import { motion, AnimatePresence } from "framer-motion";

const MenuCard = ({ image, name, ingredients, sku, options, price }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="menu-card"
        layout
        initial={{ opacity: 0.4, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0.4, scale: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img src={image} alt="food item" className="menu-card__img" />
        <h3 className="menu-card__title">{name}</h3>
        <p className="menu-card__ingredients">{ingredients}</p>
        <div className="menu-card__price-box">
          <select name={`food-item-${sku}`} className="menu-card__food-item">
            {options.map((el) => (
              <option value={el}>{el}</option>
            ))}
          </select>
          <p className="menu-card__price">${price[0].toFixed(2)}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MenuCard;
