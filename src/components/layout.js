import React from "react";

import { GlobalStyle } from "../theme/global-style";

import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <MainContent />
      {/* <Footer /> */}
      <GlobalStyle />
    </>
  );
};

export default Layout;
