import React from "react";
import { AnimationContainer } from "../utils/AnimationContainer";
import "../../styles/about.sass";

export const AboutSection = () => {
  return (
    <section className="AboutContainer">
      <article className="container">
        <div className="aboutInfo">
          <AnimationContainer customClassName="titleAbout">
            <h1>Información nutrimental</h1>
          </AnimationContainer>

          <div className="ingredientesTabla">
            <AnimationContainer customClassName="infoIngredientes" customDelay={0.4}>
              <ul>
                <li>Vitalínea® Bebible Guayaba 217gr</li>
                <li>Valor promedio por porción de 217gr</li>
                <li>Porciones por envase: 1</li>
              </ul>

              <p>
                <strong>Ingredientes:</strong> <br /> Leche descremada pasteurizada y/o
                reconstituida pasteurizada de vaca. 3.5% preparado de fruta guayaba (acesulfame K y
                sucralosa (27.2mg/100g)), crema, almidón modificado, maltodextrina y cultivos
                lácticos.
              </p>
            </AnimationContainer>

            <AnimationContainer customClassName="tableInfo" customDelay={0.6}>
              <table>
                <tbody>
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
                </tbody>
              </table>
            </AnimationContainer>
          </div>
        </div>
      </article>
    </section>
  );
};
