import { useEffect, useRef } from "react";
import { BiListPlus } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { AiOutlineFileProtect, AiOutlineHeart } from "react-icons/ai";

const Counter = () => {
  return (
    <section className="section-counter">
      <CountItem number={105} logo={<BiListPlus />} name={"Ingredients"} />
      <CountItem number={600} logo={<GoPerson />} name={"Clients Daily"} />
      <CountItem
        number={50}
        logo={<AiOutlineFileProtect />}
        name={"Years of Experience"}
      />
      <CountItem
        number={100}
        logo={<AiOutlineHeart />}
        name={"Fresh & Halal"}
      />
    </section>
  );
};

const CountItem = ({ logo, number, name }) => {
  const numRef = useRef();

  useEffect(() => {
    let start = 0;
    let end = parseFloat(number);
    let increment = Math.floor(end / 10);
    const interval = 50;

    const updateCounter = () => {
      if (start < end) {
        numRef.current.innerHTML = start;
        start += increment;
        setTimeout(updateCounter, interval);
      } else {
        numRef.current.innerHTML = number;
      }
    };
    updateCounter();
  }, [number]);

  return (
    <div className="counter">
      <span className="counter__shape">{logo}</span>
      <p ref={numRef} className="counter__number"></p>
      <p className="counter__name">{name}</p>
    </div>
  );
};

export default Counter;
