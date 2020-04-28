import React from "react";

import styled from "styled-components";

import Logo from "../logo/logo";
import footerBottomBackground from "../../images/black.png";
import footerUpperBackground from "../../images/ourvalues.png";
import messengers from "../../images/group.png";

import SectionOurValues from "./SectionOurValues";
import Navbar from "../NavBar/NavBar";

const FooterBottomBackground = styled.div`
  height: 500px;
  background: url(${footerBottomBackground});
  z-index: 1;
`;
const FooterUpperBackground = styled.div`
  height: 1450px;
  background-size: cover;
  background-repeat: no-repeat;
  background: url(${footerUpperBackground}) center;
`;
const FooterWrapper = styled.div`
  padding: 10% 7% 5%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Footer = () => (
  <FooterUpperBackground>
    {/* <SectionOurValues /> */}
    <FooterBottomBackground>
      <FooterWrapper>
        <Logo white />
        <Navbar white />
        <div>802 E. Whiting Street Tampa, FL 33602</div>
        <img src={messengers} />
      </FooterWrapper>
    </FooterBottomBackground>
  </FooterUpperBackground>
);

export default Footer;
