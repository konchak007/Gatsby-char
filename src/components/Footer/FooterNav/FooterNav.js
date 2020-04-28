import React from "react";
import styled from "styled-components";

import Logo from "../../Logo/Logo";
import Navbar from "../../NavBar/NavBar";

const FooterContent = styled.div`
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
`;

const Location = styled.div`
  color: white;
  text-align: center;
`;

const FooterNav = () => (
  <FooterContent>
    <Logo white />
    <Navbar white />
    <Location>
      802 E. Whiting Street
      <br />
      Tampa, FL 33602
    </Location>
    <img width="120px" />
  </FooterContent>
);

export default FooterNav;
