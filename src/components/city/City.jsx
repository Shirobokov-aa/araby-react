import "./city.css";

import line from "./../../img/svgCity/Line 31.svg";


function City() {
  return (
    <div className="city">
      <div className="city__tittle">
        تورهای روسیه
        <div className="sity__title--line">
            <img src={line} alt="line" />
        </div>
      </div>


    </div>
  );
}

export default City;
