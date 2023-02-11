import React from "react";
import { Head, Header, Footer } from "./";

export const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
