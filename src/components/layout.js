import React from "react";

import { GlobalStyle } from "../theme/global-style";

import Header from "./Header/Header";

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
