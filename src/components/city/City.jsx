import "./city.css";
import CardBig from "../card-big/Cardbig";
import Cardmed from "../cardmed/Cardmed";
import Slider from "../slider/Slider";

function City() {
  return (
    <div className="city">
      <div className="city__tittle">تورهای روسیه</div>
      <div className="city__title--line"></div>
      <div className="cardBig__block">
        <CardBig />
        <CardBig />
      </div>
      <div className="slider__block">
        <Cardmed />
        <Cardmed />
        <Cardmed />
        <Slider />
      </div>
    </div>
  );
}

export default City;
