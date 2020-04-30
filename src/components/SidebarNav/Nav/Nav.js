import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Button from "../../Button/Button";

const StyledLink = styled.div`
  text-decoration: none;
  font-weight: bold;
  color: #2d2d2d;
  margin: 0.5rem auto;
`;
const Links = styled.div`
  display: flex;
  flex-direction: column;

  background-color: white;
  position: absolute;
  top: 115px;
  left: 0;

  width: 100vw;
`;
const StyledButton = styled.div`
  margin: 1rem auto;
`;
const NavBar = () => (
  <>
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
      <StyledButton>
        <Button text="log in" />
      </StyledButton>
      <StyledButton>
        <Button text="request a demo" theme="blue" />
      </StyledButton>
    </Links>
  </>
);

export default NavBar;
