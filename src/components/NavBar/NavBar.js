import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
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
const Button = styled.button`
  text-transform: uppercase;
  display: flex;
  font-weight: bold;
  border: solid 2px;
  outline: none;
  cursor: pointer;
  padding: 7.5px 30px;
  background-color: transparent;
  margin: 0 25px;
`;
const BlueButton = styled(Button)`
  color: white;
  border-color: #3e7dfe;
  background-color: #3e7dfe;
  margin: 0;
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
        <Button>log in</Button>
        <BlueButton>request a demo</BlueButton>
      </Buttons>
    </NavLinks>
  </Navigation>
);

export default NavBar;
