import React from "react";
import { Layout } from "./components/layout";
import { HeroSection } from "./components/content/HeroSection";
import { AboutSection } from "./components/content/AboutSection";
import { ProductsSection } from "./components/content/ProductsSection";

const App = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
    </Layout>
  );
};

export default App;
