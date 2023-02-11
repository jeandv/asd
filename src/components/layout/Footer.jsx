import React from "react";
import "../../styles/footer.sass";
import danone from "../../assets/danone.png";
import vitalineaLogo from "../../assets/vitalinea-logo.png";

export const Footer = () => {
  const date = new Date();

  const year = date.getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="imgContainer">
          <img src={danone} alt="Danone" className="danone" />

          <div className="infoContainerNoMobile">
            <p>Términos y condiciones | Políticas de privacidad | Aviso de privacidad</p>
            <p>
              Danone de México {year} ©. Todos los derechos reservados {year}
            </p>
          </div>

          <img src={vitalineaLogo} alt="Vitalinea Logo" className="vitalineaLogo" />
        </div>

        <div className="infoContainer">
          <p>Términos y condiciones | Políticas de privacidad | Aviso de privacidad</p>
          <p>
            Danone de México {year} ©. Todos los derechos reservados {year}
          </p>
        </div>
      </div>
    </footer>
  );
};
