import React from "react";

import { GlobalStyle } from "../theme/global-style";

import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";

const Layout = () => {
  return (
    <>
      <Header />
      <MainContent />
      <GlobalStyle />
    </>
  );
};

export default Layout;
