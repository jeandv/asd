import React from "react";
import { AnimationContainer } from "../utils/AnimationContainer";
import "../../styles/footer.sass";
import danone from "../../assets/danone.png";
import vitalineaLogo from "../../assets/vitalinea-logo.png";

export const Footer = () => {
  const date = new Date();

  const year = date.getFullYear();

  return (
    <footer>
      <div className="container">
        <AnimationContainer customClassName="imgContainer">
          <img src={danone} alt="Danone" className="danone" />

          <AnimationContainer customClassName="infoContainerNoMobile">
            <p>Términos y condiciones | Políticas de privacidad | Aviso de privacidad</p>
            <p>
              Danone de México {year} ©. Todos los derechos reservados {year}
            </p>
          </AnimationContainer>

          <img src={vitalineaLogo} alt="Vitalinea Logo" className="vitalineaLogo" />
        </AnimationContainer>

        <AnimationContainer customClassName="infoContainer">
          <p>Términos y condiciones | Políticas de privacidad | Aviso de privacidad</p>
          <p>
            Danone de México {year} ©. Todos los derechos reservados {year}
          </p>
        </AnimationContainer>
      </div>
    </footer>
  );
};
