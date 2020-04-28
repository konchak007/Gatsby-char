import React from "react";
import styled from "styled-components";

//import HeaderContent from "./HeaderContent";
import NavBar from "../NavBar/NavBar";

const Wrapper = styled.div`
  padding: 0 7%;
`;

const Header = () => (
  <header>
    <Wrapper>
      <NavBar />
    </Wrapper>
    {/* <HeaderContent /> */}
  </header>
);

export default Header;
