import { useEffect, useRef, useState } from "react";
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
  const numRef = useRef(null);
  const [isVisible, setIsVisibile] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisibile(entry.isIntersecting);
        console.log(entry.isIntersecting);
      },
      {
        threshold: 1,
      }
    );

    const elementToObserve = numRef.current;
    observer.observe(elementToObserve);

    return () => {
      if (elementToObserve) {
        observer.unobserve(elementToObserve);
      }
    };
  }, []);

  useEffect(() => {
    let start = 0;
    let end = parseFloat(number);
    let increment = Math.floor(end / 15);
    const interval = 60;

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
  }, [number, isVisible]);

  return (
    <div className="counter">
      <span className="counter__shape">{logo}</span>
      <p ref={numRef} className="counter__number"></p>
      <p className="counter__name">{name}</p>
    </div>
  );
};

export default Counter;
