import React from "react";
import "../../styles/about.sass";
import Fresa2 from "../../assets/fresa-2.png";
import Fresa4 from "../../assets/fresa-4.png";

export const AboutSection = () => {
  return (
    <section className="AboutContainer">
      <img src={Fresa2} alt="Fresa Vitalínea" className="fresa2" />
      <img src={Fresa4} alt="Fresa Vitalínea" className="fresaAbout" />

      <article className="container">
        <div className="aboutInfo">
          <div>
            <h1>Información nutrimental</h1>
          </div>

          <div>
            <ul>
              <li>Vitalínea® Bebible Guayaba 217gr</li>
              <li>Valor promedio por porción de 217gr</li>
              <li>Porciones por envase: 1</li>
            </ul>
          </div>

          <div>
            <p>
              <strong>Ingredientes:</strong> <br /> Leche descremada pasteurizada y/o reconstituida
              pasteurizada de vaca. 3.5% preparado de fruta guayaba (acesulfame K y sucralosa
              (27.2mg/100g)), crema, almidón modificado, maltodextrina y cultivos lácticos.
            </p>
          </div>
        </div>
        <div className="tableInfo">
          <table>
            <tr>
              <td>Contenido energético kJ/kcal</td>
              <td>413,2/97,9</td>
            </tr>
            <tr className="gray">
              <td>Proteínas (g)</td>
              <td>5.3</td>
            </tr>
            <tr>
              <td>Grasas (lípidos) (g)</td>
              <td>2.1</td>
            </tr>
            <tr className="gray">
              <td>Grasas saturadas (g)</td>
              <td>1.4</td>
            </tr>
            <tr>
              <td>Carbohidratos (Hidratos de carbono) (g)</td>
              <td>12.4</td>
            </tr>
            <tr className="gray">
              <td>Azúcares (g)</td>
              <td>7.7</td>
            </tr>
            <tr>
              <td>Azúcares añadidos (g)</td>
              <td>0.1</td>
            </tr>
            <tr className="gray">
              <td>Fibra dietética (g)</td>
              <td>0.0</td>
            </tr>
            <tr>
              <td>Sodio (mg)</td>
              <td>92.7</td>
            </tr>
            <tr className="gray">
              <td>Calcio (mg)</td>
              <td>199.6</td>
            </tr>
            <tr>
              <td>%VNR*</td>
              <td>22</td>
            </tr>
          </table>
        </div>
      </article>
    </section>
  );
};
