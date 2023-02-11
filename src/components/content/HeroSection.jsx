import React from "react";
import "../../styles/hero.sass";
import vitalineaProducto from "../../assets/vitalinea-producto.png";
import federacionMexDiabetes from "../../assets/federacion-mexicana-diabetes.png";
import menosKcal from "../../assets/menos-100kcal.png";
import arrowIcon from "../../assets/arrow-icon.svg";
// import Fresa3 from "../../assets/fresa-3.png";
// import Fresa4 from "../../assets/fresa-4.png";

export const HeroSection = () => {
  return (
    <section className="HeroContainer">
      {/* <img src={Fresa3} alt="Fresa Vitalínea" className="fresa3" />
      <img src={Fresa4} alt="Fresa Vitalínea" className="fresa4" /> */}

      <div className="container">
        <div className="imgProducto">
          <img src={vitalineaProducto} alt="Vitalínea® Bebible Fresa 217 gr." />
        </div>

        <div className="aboutHero">
          <div className="saboresHero">
            <span>Sabor:</span>
            <div>
              <span>Fresa</span>
              <span>Guayaba</span>
              <span>Toronja</span>
            </div>
          </div>

          <div className="titleHero">
            <h1>Vitalínea® Bebible Fresa 217 gr.</h1>
          </div>

          <div className="infoHero">
            <p>
              ¡La presentación ideal para llevar contigo! Vitalínea bebible es la opción si eres de
              las personas que siempre están activas y quieren probar algo sano, rico y práctico.
            </p>
            <button>Comprar en Walmart</button>
          </div>

          <div className="imgInfoHero">
            <img src={federacionMexDiabetes} alt="Federación Mexicana de Diabetes A.C." />
            <img src={menosKcal} alt="Menos de 100Kcal" />
          </div>
        </div>
      </div>
      <div className="arrowIcon">
        <img src={arrowIcon} alt="Arrow Icon" />
      </div>

      {/* <div className="diagonalBox"></div> */}
    </section>
  );
};
