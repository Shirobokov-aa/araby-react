import "./tizers.css";

import bay from "./../../img/svgTizers/bay.svg";
import doc from "./../../img/svgTizers/doc.svg";
import car from "./../../img/svgTizers/car.svg";
import book from "./../../img/svgTizers/book.svg";
import planet from "./../../img/svgTizers/planet.svg";
import gerb from "./../../img/svgTizers/gerb.svg";

function Tizers() {
  return (
    <div className="container">
      <div className="tizers">
        <div className="tizers__item">
          <img src={bay} alt="bay" />
          <div className="tizer__item--text">
            تور گاید <br />
            روسیه{" "}
          </div>
        </div>
        <div className="tizers__item">
          <img src={doc} alt="doc" />
          <div className="tizer__item--text">
            بیمه
            <br />
            روسیه
          </div>
        </div>
        <div className="tizers__item">
          <img src={car} alt="car" />
          <div className="tizer__item--text">
            حمل و نقل در
            <br />
            روسیه
          </div>
        </div>
        <div className="tizers__item">
          <img src={book} alt="book" />
          <div className="tizer__item--text">
            هتل های
            <br />
            روسیه
          </div>
        </div>
        <div className="tizers__item">
          <img src={planet} alt="planet" />
          <div className="tizer__item--text">
            تورهای
            <br />
            روسیه
          </div>
        </div>
        <div className="tizers__item">
          <img src={gerb} alt="gerb" />
          <div className="tizer__item--text">
            ویزای
            <br />
            روسیه
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tizers;
