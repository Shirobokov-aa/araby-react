import "./hotels.css";
import HotelCard from "../hotelCard/HotelCard";
import Slider from "../slider/Slider";

function Hotels() {
  return (
    <div className="hotels">
      <div className="hotels__tittle">هتل های روسیه</div>
      <div className="hotels__title--line"></div>
      <div className="HotelCard__info">
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <Slider />
      </div>
    </div>
  );
}

export default Hotels;
