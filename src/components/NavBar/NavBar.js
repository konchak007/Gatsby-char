import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
  margin: 0 2.5rem;
  color: ${(props) => props.white && "white"};

  @media (max-width: 440px) {
    margin: 0 1rem;
  }
`;

const NavBar = ({ white }) => (
  <>
    <div>
      <StyledLink to="/" white={white} as={Link}>
        Pricing
      </StyledLink>
      <StyledLink to="/" white={white} as={Link}>
        Use
      </StyledLink>
      <StyledLink to="/" white={white} as={Link}>
        About
      </StyledLink>
      <StyledLink to="/" white={white} as={Link}>
        Blog
      </StyledLink>
    </div>
  </>
);

export default NavBar;
