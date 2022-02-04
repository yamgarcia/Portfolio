import React from "react";
// @ts-ignore
import Footer from "../components/Footer/Footer.tsx";
// @ts-ignore
import Header from "../components/Header/Header.tsx";
import { Container } from "./LayoutStyles";

export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
