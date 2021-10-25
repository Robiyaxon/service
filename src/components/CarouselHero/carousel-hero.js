import React from "react";
import { Carousel } from "react-bootstrap";

// Images
import img1 from "../../assets/img/1.png";
import img2 from "../../assets/img/2.png";
import img3 from "../../assets/img/3.png";

export default function CarouselHero() {
  return (
    <section className="carouselHero wrapper">
      <Carousel className="wrapper" fade>
        <Carousel.Item>
          <img className="carouselHero__img" src={img1} alt="First slide" />
          <Carousel.Caption className="carouselHero__caption">
            <h3>QULAY KREDIT </h3>
            <p>Barcha xizmatlarni kredit orqali yopish imkoni</p>
            <button className="btn">Batafsil ma’lumot</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carouselHero__img" src={img2} alt="First slide" />
          <Carousel.Caption className="carouselHero__caption">
            <h3>Mo’jaz to’yxona</h3>
            <p>Barcha xizmatlarni kredit orqali yopish imkoni</p>
            <button className="btn">Batafsil ma’lumot</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carouselHero__img" src={img3} alt="First slide" />
          <Carousel.Caption className="carouselHero__caption">
            <h3>HASHAMATLI ORZULAR RO’YOBI</h3>
            <p>Orzularingizni birga ro’yobga chiqaramiz</p>
            <button className="btn">Batafsil ma’lumot</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="wrapper flex carouselHero__blocks">
        <div className="carouselHero__block flex-item-25">
          <i class="fal fa-credit-card-front"></i>
          <span>Kreditga to'y</span>
        </div>
        <div className="carouselHero__block flex-item-25">
          <i class="far fa-user"></i>
          <span>Menejer</span>
        </div>
        <div className="carouselHero__block flex-item-25">
          <i class="far fa-poll-h"></i>
          <span>Xizmatlar</span>
        </div>
        <div className="carouselHero__block flex-item-25">
          <i class="fas fa-headset"></i>
          <span>Aloqa</span>
        </div>
      </div>
    </section>
  );
}
