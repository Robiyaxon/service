import React from "react";
// Images
import honeymoon1 from "../../assets/img/honeymoon/honeymoon-1.png";
import honeymoon2 from "../../assets/img/honeymoon/honeymoon-2.png";
import honeymoon3 from "../../assets/img/honeymoon/honeymoon-3.png";
import honeymoon4 from "../../assets/img/honeymoon/honeymoon-4.png";
import honeymoon5 from "../../assets/img/honeymoon/honeymoon-5.png";

export default function Honeymoon() {
  return (
    <section className="honeymoonGallery">
      <div className="container">
        <h3>Asal oyi</h3>
      </div>
      <div className="container">
        <div className="gallery flex">
          <div className="flex-item-100 flex">
            <div className="flex-item-30 gallery__item">
              <img src={honeymoon1} alt="" />
              <div className="gallery__info">
                <p className="big">Sahna bezagi</p>
                <p>To’yxona va banketlarni bezash</p>
              </div>
              <div className="gallery__hover">
                <h5>To’yxona</h5>
                <p>500 kishilik</p>
                <button className="btn gallery__btn">Ko’rish</button>
              </div>
            </div>
            <div className="flex-item-30 gallery__item">
              <img src={honeymoon2} alt="" />
              <div className="gallery__info">
                <p className="big">Sahna bezagi</p>
                <p>To’yxona va banketlarni bezash</p>
              </div>
              <div className="gallery__hover">
                <h5>To’yxona</h5>
                <p>500 kishilik</p>
                <button className="btn gallery__btn">Ko’rish</button>
              </div>
            </div>
            <div className="flex-item-30 gallery__item">
              <img src={honeymoon3} alt="" />
              <div className="gallery__info">
                <p className="big">Sahna bezagi</p>
                <p>To’yxona va banketlarni bezash</p>
              </div>
              <div className="gallery__hover">
                <h5>To’yxona</h5>
                <p>500 kishilik</p>
                <button className="btn gallery__btn">Ko’rish</button>
              </div>
            </div>
          </div>
          <div className="flex-item-100 flex mt-20">
            <div className="flex-item-50 gallery__item mt-20">
              <img src={honeymoon4} alt="" />
              <div className="gallery__info">
                <p className="big">Sahna bezagi</p>
                <p>To’yxona va banketlarni bezash</p>
              </div>
              <div className="gallery__hover">
                <h5>To’yxona</h5>
                <p>500 kishilik</p>
                <button className="btn gallery__btn">Ko’rish</button>
              </div>
            </div>
            <div className="flex-item-50 gallery__item mt-20">
              <img src={honeymoon5} alt="" />
              <div className="gallery__info">
                <p className="big">Sahna bezagi</p>
                <p>To’yxona va banketlarni bezash</p>
              </div>
              <div className="gallery__hover">
                <h5>To’yxona</h5>
                <p>500 kishilik</p>
                <button className="btn gallery__btn">Ko’rish</button>
              </div>
            </div>
          </div>
          <div className="center flex-item-100 mt-20">
            <button className="btn gallery__btn mt-20">Ko’rib chiqish</button>
          </div>
        </div>
      </div>
    </section>
  );
}
