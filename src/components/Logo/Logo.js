import React from "react";

import logo from "../../images/logo.svg";
import logoWhite from "../../images/logo2.svg";

const Logo = ({ theme, width }) => (
  <a href="/">
    <img src={`${theme ? logoWhite : logo}`} width={width} alt="logo" />
  </a>
);

export default Logo;
