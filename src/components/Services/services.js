import React, { useState } from "react";
import Gallery from "../Gallery/gallery";

export default function Services() {
  const [active, setActive] = useState(0);
  return (
    <section className="services">
      <div className="container">
        <div className="center">
          <h3>Xizmatlar</h3>
          <p>
            Sizga qulay bo’lgan xizmatlar to’plamidan foydalanib vaqtingizni va
            pulingizni tejash imkoni
          </p>
          <div className="flex">
            <div className="flex btn__row">
              <button
                className={"services__btn " + (active === 0 ? "active" : null)}
                onClick={() => {
                  setActive(0);
                }}
              >
                To’yxona
              </button>
              <button
                className={"services__btn " + (active === 1 ? "active" : null)}
                onClick={() => {
                  setActive(1);
                }}
              >
                Taklifnomalar
              </button>
              <button
                className={"services__btn " + (active === 2 ? "active" : null)}
                onClick={() => {
                  setActive(2);
                }}
              >
                To'yxona
              </button>
              <button
                className={"services__btn " + (active === 3 ? "active" : null)}
                onClick={() => {
                  setActive(3);
                }}
              >
                Uzuk
              </button>
              <button
                className={"services__btn " + (active === 4 ? "active" : null)}
                onClick={() => {
                  setActive(4);
                }}
              >
                Sahna bezagi
              </button>
              <button
                className={"services__btn " + (active === 5 ? "active" : null)}
                onClick={() => {
                  setActive(5);
                }}
              >
                San'atkorlar
              </button>
            </div>
            <div className="flex btn__row">
              <button
                className={"services__btn " + (active === 6 ? "active" : null)}
                onClick={() => {
                  setActive(6);
                }}
              >
                To'y liboslari
              </button>
              <button
                className={"services__btn " + (active === 7 ? "active" : null)}
                onClick={() => {
                  setActive(7);
                }}
              >
                Sartarosh/Stilist
              </button>
              <button
                className={"services__btn " + (active === 8 ? "active" : null)}
                onClick={() => {
                  setActive(8);
                }}
              >
                Sozandalar
              </button>
              <button
                className={"services__btn " + (active === 9 ? "active" : null)}
                onClick={() => {
                  setActive(9);
                }}
              >
                To'y avtomobili
              </button>
              <button
                className={"services__btn " + (active === 10 ? "active" : null)}
                onClick={() => {
                  setActive(10);
                }}
              >
                Shirinliklar
              </button>
              <button
                className={"services__btn " + (active === 11 ? "active" : null)}
                onClick={() => {
                  setActive(11);
                }}
              >
                Sovg'alar
              </button>
            </div>
            <div className="flex btn__row">
              <button
                className={"services__btn " + (active === 12 ? "active" : null)}
                onClick={() => {
                  setActive(12);
                }}
              >
                Foto Video Operator
              </button>
              <button
                className={"services__btn " + (active === 13 ? "active" : null)}
                onClick={() => {
                  setActive(13);
                }}
              >
                Boshlovchilar
              </button>
              <button
                className={"services__btn " + (active === 14 ? "active" : null)}
                onClick={() => {
                  setActive(14);
                }}
              >
                Love Story
              </button>
              <button
                className={"services__btn " + (active === 15 ? "active" : null)}
                onClick={() => {
                  setActive(15);
                }}
              >
                Multi Qahramon
              </button>
              <button
                className={"services__btn " + (active === 16 ? "active" : null)}
                onClick={() => {
                  setActive(16);
                }}
              >
                Foto Studio
              </button>
              <button
                className={"services__btn " + (active === 17 ? "active" : null)}
                onClick={() => {
                  setActive(17);
                }}
              >
                Foto Sessiya
              </button>
            </div>
          </div>
          <Gallery />
        </div>
      </div>
    </section>
  );
}
