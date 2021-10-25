import React from "react";

// Images
import img1 from "../../assets/img/gallery/gallery-1.png";
import img2 from "../../assets/img/gallery/gallery-2.png";
import img3 from "../../assets/img/gallery/gallery-3.png";
import img4 from "../../assets/img/gallery/gallery-4.png";
import img5 from "../../assets/img/gallery/gallery-5.png";

export default function Portfolio() {
  return (
    <section className="portfolioGallery">
      <div className="container">
        <div className="center">
          <h3> Portfolio</h3>
          <p>
            Sizga qulay bo’lgan xizmatlar to’plamidan foydalanib vaqtingizni va
            pulingizni tejash imkoni{" "}
          </p>
        </div>
        <div className="gallery">
          <div className="flex">
            <div className="flex-item-50 flex">
              <div className="flex-item-50">
                <div className="flex-item-100 flex gallery__item">
                  <img src={img2} alt="" />
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
              <div className="flex-item-50">
                <div className="flex-item-100 flex gallery__item">
                  <img src={img3} alt="" />
                  <div className="gallery__info">
                    <p className="big">Boshlovchilar</p>
                    <p>500 kishilik</p>
                  </div>
                  <div className="gallery__hover">
                    <h5>Boshlovchilar</h5>
                    <p>500 kishilik</p>
                    <button className="btn gallery__btn">Ko’rish</button>
                  </div>
                </div>
                <div className="flex-item-100 flex gallery__item mt-10">
                  <img src={img4} alt="" />
                  <div className="gallery__info">
                    <p className="big">Stilist</p>
                    <p>Soch turmagi va liboslar</p>
                  </div>
                  <div className="gallery__hover">
                    <h5>Stilist</h5>
                    <p>Soch turmagi va liboslar</p>
                    <button className="btn gallery__btn">Ko’rish</button>
                  </div>
                </div>
              </div>
              <div className="flex gallery__item mt-20">
                <img src={img1} alt="" />
                <div className="gallery__info">
                  <p className="big">Fotostudio</p>
                  <p>Sifatli foto va video mahsulotlar</p>
                </div>
                <div className="gallery__hover">
                  <h5>Fotostudio</h5>
                  <p>Sifatli foto va video mahsulotlar</p>
                  <button className="btn gallery__btn">Ko’rish</button>
                </div>
              </div>
            </div>
            <div className="flex-item-50">
              <div className="flex gallery__item">
                <img src={img1} alt="" />
                <div className="gallery__info">
                  <p className="big">Fotostudio</p>
                  <p>Sifatli foto va video mahsulotlar</p>
                </div>
                <div className="gallery__hover">
                  <h5>Fotostudio</h5>
                  <p>Sifatli foto va video mahsulotlar</p>
                  <button className="btn gallery__btn">Ko’rish</button>
                </div>
              </div>
              <div className="flex">
                <div className="flex-item-50 gallery__item mt-20">
                  <img src={img5} alt="" />
                  <div className="gallery__info">
                    <p className="big">Uzuklar</p>
                    <p>To’yxona va banketlarni bezash</p>
                  </div>
                  <div className="gallery__hover">
                    <h5>To’yxona</h5>
                    <p>500 kishilik</p>
                    <button className="btn gallery__btn">Ko’rish</button>
                  </div>
                </div>
                <div className="flex-item-50 gallery__item mt-20">
                  <img src={img2} alt="" />
                  <div className="gallery__info">
                    <p className="big">Sahna bezagi</p>
                    <p>To’yxona va banketlarni bezash</p>
                  </div>
                  <div className="gallery__hover">
                    <h5>Sahna bezagi</h5>
                    <p>To’yxona va banketlarni bezash</p>
                    <button className="btn gallery__btn">Ko’rish</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="center">
            <button className="btn btn__crimson">Barchasini ko’rish</button>
          </div>
          <div className="shadow"></div>
        </div>
      </div>
    </section>
  );
}
