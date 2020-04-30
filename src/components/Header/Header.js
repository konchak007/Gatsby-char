import React from "react";
import styled from "styled-components";

import HeaderContent from "./HeaderContent/HeaderContent";
import NavBar from "../NavBar/NavBar";
import SideBarNav from "../SidebarNav/SidebarNav";
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

  @media (max-width: 950px) {
    display: none;
  }
`;

const Navigation = styled.div`
  font-weight: bold;

  display: flex;
  align-items: center;
`;

const Header = () => (
  <header>
    <nav>
      <Wrapper>
        {" "}
        <Container>
          <Logo width="140px" />
          <Navigation>
            <NavBar />
            <Buttons>
              <Button text="log in" />
              <Button text="request a demo" blueType />
            </Buttons>
          </Navigation>
          <SideBarNav />
        </Container>
      </Wrapper>
    </nav>
    <HeaderContent />
  </header>
);

export default Header;
