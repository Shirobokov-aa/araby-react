import "./header.css";
import Btnblue from "../btnblue/Btnblue";

import wathsup from "./../../img/svgHeader/wathsup.svg";
import tg from "./../../img/svgHeader/tg.svg";
import number from "./../../img/svgHeader/phon.svg";
import logoImg from "./../../img/svgHeader/Logo.svg";
import mail from "./../../img/svgHeader/mail.svg";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="button__block">
            <Btnblue />
            <div className="header__mail">
              <div className="mail__icon">
                <img src={mail} alt="mail" />
              </div>
              <a href="/">
                <div className="text__mail">info@shomoltour.com</div>
              </a>
            </div>
          </div>
          <div className="social__block">
            <div className="header__social">
              <img src={wathsup} alt="wathsup" />
              <a href="/">
                <div className="text__networks">+98 1343425970</div>
              </a>
            </div>
            <div className="header__social">
              <img src={tg} alt="tg" />
              <a href="/">
                <div className="text__networks">+98 1343425970</div>
              </a>
            </div>
          </div>
          <div className="number__block">
            <img src={number} alt="number" />
            <div className="text__number">+98 211373</div>
          </div>
          <div className="header__logo">
            <img src={logoImg} alt="Logo" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
