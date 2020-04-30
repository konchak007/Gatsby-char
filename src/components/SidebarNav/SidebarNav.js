import React, { useState } from "react";
import styled from "styled-components";

import Nav from "./Nav/Nav";

import burger from "../../images/burger.svg";

const NavBar = styled.div`
  margin-top: 1.2rem;
  @media (max-width: 950px) {
    display: flex;
  }

  @media (min-width: 951px) {
    display: none;
  }
`;
const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function SideBarNav() {
  const [openStatus, isOpen] = useState(false);
  return (
    <NavContainer>
      <NavBar onClick={() => isOpen(!openStatus)}>
        <img src={burger} width="30px" alt="nav-icon " />
      </NavBar>
      {openStatus && <Nav />}
    </NavContainer>
  );
}

export default SideBarNav;
