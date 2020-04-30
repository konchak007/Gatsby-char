import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
  margin: 0 2.5rem;
  color: #2d2d2d;

  @media (max-width: 440px) {
    margin: 0 1rem;
  }
`;
const Links = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavBar = () => (
  <Links>
    <StyledLink to="/" as={Link}>
      Pricing
    </StyledLink>
    <StyledLink to="/" as={Link}>
      Use
    </StyledLink>
    <StyledLink to="/" as={Link}>
      About
    </StyledLink>
    <StyledLink to="/" as={Link}>
      Blog
    </StyledLink>
  </Links>
);

export default NavBar;
