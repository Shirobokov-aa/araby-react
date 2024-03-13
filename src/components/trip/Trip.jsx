import "./trip.css";
import train from "./../../img/svgTrip/train.svg";
import air from "./../../img/svgTrip/air.svg";

function Trip() {
  return (
    <div className="trip">
      <div className="trip__tittle">سفر در روسیه</div>
      <div className="trip__title--line"></div>
      <div className="trip__icone">
        <div className="trip__train">
          <div className="trip__train--img">
            <img src={train} alt="train" />
          </div>
          <div className="trip__train--txt">
            خرید بلیط قطار
            <br />
            در روسیه
          </div>
        </div>
        <div className="trip__air">
          <div className="trip__train--img">
            <img src={air} alt="train" />
          </div>
          <div className="trip__train--txt">
            خرید بلیط هواپیما <br />
            در روسیه
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trip;
