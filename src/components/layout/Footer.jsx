import React from "react";
import "../../styles/footer.sass";
import danone from "../../assets/danone.png";
import vitalineaLogo from "../../assets/vitalinea-logo.png";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="imgContainer">
          <img src={danone} alt="Danone" className="danone" />
          <img src={vitalineaLogo} alt="Vitalinea Logo" className="vitalineaLogo" />
        </div>
        <div className="infoContainer">
          <p>Términos y condiciones | Políticas de privacidad | Aviso de privacidad</p>
          <p>Danone de México 2017 ©. Todos los derechos reservados 2017</p>
        </div>
      </div>
    </footer>
  );
};
