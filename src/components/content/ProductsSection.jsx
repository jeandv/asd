import React from "react";
import { AnimationContainer } from "../utils/AnimationContainer";
import "../../styles/products.sass";
import vitalineaGriego from "../../assets/vitalinea-griego.png";
import vitalineaAzucar from "../../assets/vitalinea-sin-azucar.png";
import vitalineaBebible from "../../assets/vitalinea-bebible.png";

export const ProductsSection = () => {
  return (
    <section className="productsContainer">
      <div className="container">
        <AnimationContainer customClassName="productsTitle" customDelay={0.4}>
          <h1>LA FAMILIA VITALÍNEA</h1>
        </AnimationContainer>

        <div className="productsVitalinea">
          <AnimationContainer customDelay={0.4}>
            <img src={vitalineaGriego} alt="Vitalínea Griego" className="vitalineaGriego" />
            <h2>Vitalínea Griego</h2>
          </AnimationContainer>

          <AnimationContainer customDelay={0.5}>
            <img src={vitalineaAzucar} alt="Vitalínea sin Azúcar" className="vitalineaAzucar" />
            <h2>Vitalínea sin Azúcar</h2>
          </AnimationContainer>

          <AnimationContainer customDelay={0.6}>
            <img src={vitalineaBebible} alt="Vitalínea Bebible" className="vitalineaBebible" />
            <h2>Vitalínea Bebible</h2>
          </AnimationContainer>
        </div>
      </div>
    </section>
  );
};
