import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledLink = styled.div`
  text-decoration: none;
  font-weight: bold;
  margin: 0 2.5rem;
  color: #2d2d2d;

  @media (max-width: 440px) {
    margin: 0 1rem;
  }
`;
const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  position: absolute;
  top: 115px;
  left: 0;
  height: 100vh;
  width: 100vw;
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
