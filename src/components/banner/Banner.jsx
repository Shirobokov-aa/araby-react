import "./banner.css";

import banner from "./../../img/jpgBanner/Cover.jpg";

function Banner() {
  return (
    <div className="container__banner">
      <div className="banner">
        <img src={banner} alt="Banner" className="banner__img" />
        <div className="text-wrapper__banner">
          خدمات
          <br />
          برای تجارت و گردشگری
          <br />
          در روسیه
          <br />
        </div>
      </div>
    </div>
  );
}

export default Banner;
