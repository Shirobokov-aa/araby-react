import "./hotelCard.css";
import hotelCard from "./../../img/pngHotelCard/hotelCard.png";

import airCold from "./../../img/svgHotelCard/airCold.svg";
import pool from "./../../img/svgHotelCard/pool.svg";
import servis from "./../../img/svgHotelCard/servis.svg";
import starActiv from "./../../img/svgHotelCard/starActiv.svg";
import starNoActiv from "./../../img/svgHotelCard/starNoActiv.svg";
import tea from "./../../img/svgHotelCard/tea.svg";
import wifi from "./../../img/svgHotelCard/wifi.svg";

function HotelCard() {
  return (
    <div className="hotelCard">
      <div className="hotelCard__img">
        <img src={hotelCard} alt="hotelCard" />
      </div>
      <div className="hotelCard__text">
        <div className="hotelCard__tittle">هتل مسکو</div>
        <div className="hotelCard__box">
          <div className="hotelCard__price">تومان&nbsp;</div>
          <div className="hotelCard__price">30.000.000</div>
        </div>
        <div className="hotelCard__downBlock">
          <div className="hotelCard__icon">
            <img src={servis} alt="servis" />
            <img src={tea} alt="tea" />
            <img src={airCold} alt="airCold" />
            <img src={wifi} alt="wifi" />
            <img src={pool} alt="pool" />
          </div>
          <div className="hotelCard__ratig">
            <img src={starActiv} alt="starActiv" />
            <img src={starActiv} alt="starActiv" />
            <img src={starActiv} alt="starActiv" />
            <img src={starNoActiv} alt="starNoActiv" />
            <img src={starNoActiv} alt="starNoActiv" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
