import { AiOutlineArrowRight } from "react-icons/ai";

const FoodCard = ({ title, image }) => {
  return (
    <div className="food-card">
      <div className="food-card__curve">
        <h3 className="heading__tertiary">{title}</h3>
        <buttun className="btn btn__ghost">
          <AiOutlineArrowRight />
          See menu
        </buttun>
      </div>

      <div className="food-card__image--container">
        <img src={image} alt="food item" className="food-card__image" />
      </div>
    </div>
  );
};

export default FoodCard;
