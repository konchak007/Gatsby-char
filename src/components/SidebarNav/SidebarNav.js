import React from "react";

import styled from "styled-components";
import Nav from "./Nav/Nav";
import burger from "../../images/burger.svg";

const NavBar = styled.div`
  margin-top: 1.2rem;
  @media (max-width: 950px) {
    display: block;
  }

  @media (min-width: 951px) {
    display: none;
  }
`;

const SideBarNav = () => (
  <NavBar>
    <img src={burger} width="30px" alt="nav-icon" />
  </NavBar>
);

export default SideBarNav;
