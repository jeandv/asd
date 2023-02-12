import React from "react";
import { Layout } from "./components/layout";
import { HeroSection, AboutSection, ProductsSection } from "./components/content";
import Fresa1 from "./assets/fresa-1.png";
import Fresa2 from "./assets/fresa-2.png";
import Fresa3 from "./assets/fresa-3.png";
import Fresa4 from "./assets/fresa-4.png";

const App = () => {
  return (
    <>
      <img src={Fresa3} alt="Fresa Vitalínea" className="fresaHeader1" />
      <img src={Fresa4} alt="Fresa Vitalínea" className="fresaHeader2" />
      <img src={Fresa1} alt="Fresa Vitalínea" className="fresaHero1" />
      <img src={Fresa1} alt="Fresa Vitalínea" className="fresaHero2" />
      <img src={Fresa3} alt="Fresa Vitalínea" className="fresaAbout1" />
      <img src={Fresa2} alt="Fresa Vitalínea" className="fresaAbout2" />
      <img src={Fresa4} alt="Fresa Vitalínea" className="fresaAbout3" />
      <img src={Fresa1} alt="Fresa Vitalínea" className="fresaProducts1" />
      <img src={Fresa1} alt="Fresa Vitalínea" className="fresaProducts2" />

      <Layout>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
      </Layout>
    </>
  );
};

export default App;
