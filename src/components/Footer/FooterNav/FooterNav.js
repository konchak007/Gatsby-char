import React from "react";
import styled from "styled-components";

import Logo from "../../Logo/Logo";
import Navbar from "../../NavBar/NavBar";
import MessengersLogo from "../MessengersLogo/MessengersLogo";

const FooterContent = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
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
    <MessengersLogo />
  </FooterContent>
);

export default FooterNav;
