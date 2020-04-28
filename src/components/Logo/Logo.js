import React from "react";
import logo from "../../images/logo.png";
import logoWhite from "../../images/logo2.png";

const Logo = (props) => (
  <a href="/">
    <img src={`${props.white ? logoWhite : logo}`} width="140px" />
  </a>
);

export default Logo;
