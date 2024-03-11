import "./cardbig.css";
import cardBig from "./../../img/svgCardBig/cardBig.svg";

function CardBig() {
  return (
    <div className="cardBig">
      <div className="cardBig__img">
        <img src={cardBig} alt="CardBigImg" />
      </div>
      <div className="cardBig__text">
        <div className="cardBig__subTittle">منطقه کالینینگراد</div>
        <div className="cardBig__tittle">تور شهر کالینینگراد</div>
        <div className="cardBig__box">
          <div className="cardBig__price">تومان&nbsp;</div>
          <div className="cardBig__price">30.000.000</div>
        </div>
        <div className="cardBig__box">
          <div className="cardBig__adress">1403&nbsp;</div>
          <div className="cardBig__adress">اسفند&nbsp;</div>
          <div className="cardBig__adress">5</div>
        </div>
      </div>
    </div>
  );
}

export default CardBig;
