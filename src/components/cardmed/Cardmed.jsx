import "./cardmed.css";
import CardMed from "./../../img/svgCardMed/cardmed.svg";

function Cardmed() {
  return (
    <div className="cardMed">
      <div className="cardMed__img">
        <img src={CardMed} alt="CardMedImg" />
      </div>
      <div className="cardMed__text">
        <div className="cardMed__subTittle">منطقه کالینینگراد</div>
        <div className="cardMed__tittle">تور محله مسکو</div>
        <div className="cardMed__box">
          <div className="cardMed__price">تومان&nbsp;</div>
          <div className="cardMed__price">20.000.000</div>
        </div>
        <div className="cardMed__box">
          <div className="cardMed__adress">1403&nbsp;</div>
          <div className="cardMed__adress">اسفند&nbsp;</div>
          <div className="cardMed__adress">5</div>
        </div>
      </div>
    </div>
  );
}

export default Cardmed;
