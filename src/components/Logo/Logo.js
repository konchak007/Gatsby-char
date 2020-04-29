import React from "react";

import logo from "../../images/logo.svg";
import logoWhite from "../../images/logo2.svg";

const Logo = ({ white, width }) => (
  <a href="/">
    <img src={`${white ? logoWhite : logo}`} width={width} />
  </a>
);

export default Logo;
