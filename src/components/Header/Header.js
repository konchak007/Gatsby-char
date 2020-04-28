import React from "react";
import styled from "styled-components";

//import HeaderContent from "./HeaderContent";
import NavBar from "../NavBar/NavBar";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

const Wrapper = styled.div`
  padding: 0 7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Buttons = styled.div`
  display: flex;
`;

const Navigation = styled.div`
  height: 117px;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const Header = () => (
  <header>
    <Wrapper>
      {" "}
      <Logo />
      <Navigation>
        <NavBar />
        <Buttons>
          <Button text="log in" />
          <Button text="request a demo" blueType />
        </Buttons>
      </Navigation>
    </Wrapper>
    {/* <HeaderContent /> */}
  </header>
);

export default Header;
