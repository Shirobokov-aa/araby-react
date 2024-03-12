import "./slider.css";

import arrowLeft from "./../../img/svgArrows/arrowLeft.svg";
import arrowRight from "./../../img/svgArrows/arrowRight.svg";

function Slider() {
  return (
    <div className="slider">
      <div className="arrows">
        <div className="arrows__left">
          <img src={arrowLeft} alt="arrowLeft" />
        </div>
        <div className="arrows__right">
          <img src={arrowRight} alt="arrowRight" />
        </div>
      </div>
    </div>
  );
}

export default Slider;
