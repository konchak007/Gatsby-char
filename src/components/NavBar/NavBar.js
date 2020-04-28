import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Button from "../Button/Button";

import Logo from "../Logo/Logo";

const Navigation = styled.div`
  height: 117px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
`;
const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: Noto Sans, sans-serif;
  margin: 0 30px;
`;

const Buttons = styled.div`
  display: flex;
`;

const NavBar = () => (
  <Navigation>
    <Logo />
    <NavLinks>
      <StyledLink to="/">Pricing</StyledLink>
      <StyledLink to="/">Use</StyledLink>
      <StyledLink to="/">About</StyledLink>
      <StyledLink to="/">Blog</StyledLink>
      <Buttons>
        <Button text="log in" />
        <Button text="request a demo" />
      </Buttons>
    </NavLinks>
  </Navigation>
);

export default NavBar;
