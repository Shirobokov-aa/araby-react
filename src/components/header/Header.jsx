import "./header.css";
import Btnblue from "../btnblue/Btnblue";

import wathsup from "./../../img/svgHeader/wathsup.svg";
import tg from "./../../img/svgHeader/tg.svg";
import number from "./../../img/svgHeader/phon.svg";
import logoImg from "./../../img/svgHeader/Logo.jpg";
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
            <img src={number} alt="number" className="img__number" />
            <a href="/">
              <div className="text__number">+98 211373</div>
            </a>
          </div>
          <a href="/">
            <div className="header__logo">
              <img src={logoImg} alt="Logo" />
            </div>
          </a>
        </div>
        <div className="header__nav">
          <div className="header__nav--item">
            <a href="/" className="nav__item--text">
              تورگاید روسیه
            </a>
          </div>
          <div className="header__nav--item">
            <a href="/" className="nav__item--text">
              بیمه روسیه
            </a>
          </div>
          <div className="header__nav--item">
            <a href="/" className="nav__item--text">
              ترانسفر روسیه
            </a>
          </div>
          <div className="header__nav--item">
            <a href="/" className="nav__item--text">
              هتل های روسیه
            </a>
          </div>
          <div className="header__nav--item">
            <a href="/" className="nav__item--text">
              تورهای روسیه
            </a>
          </div>
          <div className="header__nav--item">
            <a href="/" className="nav__item--text">
              ویزا روسیه
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
