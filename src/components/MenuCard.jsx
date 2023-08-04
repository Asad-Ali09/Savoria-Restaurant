import menu from "../menu";

const MenuCard = ({ image, name, ingredients, sku, options, price }) => {
  const item = menu[0];

  return (
    <div className="menu-card">
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
    </div>
  );
};

export default MenuCard;
