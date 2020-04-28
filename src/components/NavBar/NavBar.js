import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavLinks = styled.div`
  align-items: center;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: Noto Sans, sans-serif;
  margin: 0 35px;
`;

const NavBar = () => (
  <>
    <NavLinks>
      <StyledLink to="/">Pricing</StyledLink>
      <StyledLink to="/">Use</StyledLink>
      <StyledLink to="/">About</StyledLink>
      <StyledLink to="/">Blog</StyledLink>
    </NavLinks>
  </>
);

export default NavBar;
