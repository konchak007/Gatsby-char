import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
  margin: 0 2.5rem;
  color: ${(props) => (props.white ? "white" : " #2d2d2d;")};

  @media (max-width: 440px) {
    margin: 0 1rem;
  }
`;
const Links = styled.div`
  @media (max-width: 950px) {
    display: none;
  }
`;

const NavBar = ({ theme }) => (
  <Links>
    <StyledLink to={"/"} white={theme} as={Link}>
      Pricing
    </StyledLink>
    <StyledLink to={"/"} white={theme} as={Link}>
      Use
    </StyledLink>
    <StyledLink to={"/"} white={theme} as={Link}>
      About
    </StyledLink>
    <StyledLink to={"/"} white={theme} as={Link}>
      Blog
    </StyledLink>
  </Links>
);

export default NavBar;
