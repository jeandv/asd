import React from "react";
import { AnimationContainer } from "../utils";
import "../../styles/hero.sass";
import vitalineaProducto from "../../assets/vitalinea-producto.png";
import federacionMexDiabetes from "../../assets/federacion-mexicana-diabetes.png";
import menosKcal from "../../assets/menos-100kcal.png";
import arrowIcon from "../../assets/arrow-icon.svg";

export const HeroSection = () => {
  return (
    <section className="heroContainer">
      <div className="container">
        <AnimationContainer customClassName="imgProducto" customDelay={0.4}>
          <img src={vitalineaProducto} alt="Vitalínea® Bebible Fresa 217 gr." />
        </AnimationContainer>

        <div className="aboutHero">
          <AnimationContainer customClassName="saboresHero" customDelay={0.5}>
            <span>Sabor:</span>
            <div>
              <span>Fresa</span>
              <span>Guayaba</span>
              <span>Toronja</span>
            </div>
          </AnimationContainer>

          <AnimationContainer customClassName="titleHero" customDelay={0.6}>
            <h1>Vitalínea® Bebible Fresa 217 gr.</h1>
          </AnimationContainer>

          <AnimationContainer customClassName="infoHero" customDelay={0.7}>
            <p>
              ¡La presentación ideal para llevar contigo! Vitalínea bebible es la opción si eres de
              las personas que siempre están activas y quieren probar algo sano, rico y práctico.
            </p>
            <button>Comprar en Walmart</button>
          </AnimationContainer>

          <AnimationContainer customClassName="imgInfoHero" customDelay={0.7}>
            <img src={federacionMexDiabetes} alt="Federación Mexicana de Diabetes A.C." />
            <img src={menosKcal} alt="Menos de 100Kcal" />
          </AnimationContainer>
        </div>
      </div>

      <AnimationContainer customClassName="arrowIcon" customDelay={0.7}>
        <img src={arrowIcon} alt="Arrow Icon" />
      </AnimationContainer>
    </section>
  );
};
