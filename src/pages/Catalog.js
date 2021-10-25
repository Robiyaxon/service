import React from "react";
import CarouselHero from "../components/CarouselHero/carousel-hero";
import Honeymoon from "../components/Honeymoon/honeymoon";
import Navbar from "../components/Navbar/navbar";
import Portfolio from "../components/Portfolio/portfolio";
import Services from "../components/Services/services";

export default function Catalog() {
  return (
    <React.Fragment>
      <Navbar />
      <CarouselHero />
      <Services />
      <Honeymoon />
      <Portfolio />
    </React.Fragment>
  );
}
