import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavLinks = styled.div`
  align-items: center;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.white && "white"};
  font-family: Noto Sans, sans-serif;
  margin: 0 35px;
  font-weight: bold;
`;

const NavBar = ({ white }) => (
  <>
    <NavLinks>
      <StyledLink to="/" white={white}>
        Pricing
      </StyledLink>
      <StyledLink to="/" white={white}>
        Use
      </StyledLink>
      <StyledLink to="/" white={white}>
        About
      </StyledLink>
      <StyledLink to="/" white={white}>
        Blog
      </StyledLink>
    </NavLinks>
  </>
);

export default NavBar;
