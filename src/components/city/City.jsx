import "./city.css";
import CardBig from "../card-big/Cardbig";

function City() {
  return (
    <div className="city">
      <div className="city__tittle">تورهای روسیه</div>
      <div className="sity__title--line"></div>
      <div className="cardBig__block">
        <CardBig />
        <CardBig />
      </div>
    </div>
  );
}

export default City;
