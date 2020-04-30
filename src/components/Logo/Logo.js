import React from "react";
import { Link } from "gatsby";

import logo from "../../images/logo.svg";
import logoWhite from "../../images/logo2.svg";

const Logo = ({ theme, width }) => (
  <Link href="/">
    <img src={`${theme ? logoWhite : logo}`} width={width} alt="logo" />
  </Link>
);

export default Logo;
