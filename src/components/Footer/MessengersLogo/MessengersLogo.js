import React from "react";
import styled from "styled-components";
// import { graphql } from "gatsby";
// import Img from "gatsby-image";
import facebook from "../../../images/facebook.svg";
import instagram from "../../../images/insta.svg";
import linked from "../../../images/in.svg";
import { Link } from "gatsby";

const StyledLink = styled.a`
  padding: 8px;
`;

const MessengersLogo = () => (
  <div>
    <StyledLink as={Link} href="/">
      <img src src={facebook} width="30px" />
    </StyledLink>
    <StyledLink as={Link} href="/">
      <img src={instagram} width="30px" />
    </StyledLink>
    <StyledLink as={Link} href="/">
      <img src={linked} width="30px" />
    </StyledLink>
  </div>
);

export default MessengersLogo;
