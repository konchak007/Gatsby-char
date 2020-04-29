import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 2.5rem;
  font-weight: bold;
  color: ${(props) => props.white && "white"};

  @media (max-width: 440px) {
    margin: 0 1rem;
  }
`;

const NavBar = ({ white }) => (
  <>
    <div>
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
    </div>
  </>
);

export default NavBar;
