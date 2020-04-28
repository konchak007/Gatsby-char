import React from "react";
import styled from "styled-components";

import HeaderContent from "./HeaderContent/HeaderContent";
import NavBar from "../NavBar/NavBar";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

const Wrapper = styled.div`
  padding: 0 7%;
`;
const Container = styled.div`
  height: 117px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Buttons = styled.div`
  display: flex;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  @media (max-width: 920px) {
    display: none;
  }
`;

const Header = () => (
  <header>
    <Wrapper>
      {" "}
      <Container>
        <Logo />
        <Navigation>
          <NavBar />
          <Buttons>
            <Button text="log in" />
            <Button text="request a demo" blueType />
          </Buttons>
        </Navigation>
      </Container>
    </Wrapper>
    <HeaderContent />
  </header>
);

export default Header;
