import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Button from "../../Button/Button";

const StyledLink = styled.div`
  text-decoration: none;
  font-weight: bold;
  color: #2d2d2d;

  margin: 1.1rem 0;
`;
const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  position: absolute;
  top: 117px;
  left: 0;

  width: 100vw;
`;
const StyledButton = styled.div`
  display: flex;
  margin: 1.3rem 0;
`;
const NavBar = () => (
  <>
    <Links>
      <StyledLink to={"/"} as={Link}>
        Pricing
      </StyledLink>
      <StyledLink to={"/"} as={Link}>
        Use
      </StyledLink>
      <StyledLink to={"/"} as={Link}>
        About
      </StyledLink>
      <StyledLink to={"/"} as={Link}>
        Blog
      </StyledLink>
      <StyledButton>
        <Button text="log in" />
        <Button text="request a demo" theme="blue" />
      </StyledButton>
    </Links>
  </>
);

export default NavBar;
