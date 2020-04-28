import React from "react";

import styled from "styled-components";

import footerBottomBackground from "../../images/black.png";
import footerUpperBackground from "../../images/ourvalues.png";

import SectionOurValues from "./SectionOurValues";

import Terms from "./Terms";
import FooterNav from "./FooterNav/FooterNav";

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

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const FooterWrapper = styled.div`
  padding: 10% 7% 2%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Footer = () => (
  <FooterUpperBackground>
    {/* <SectionOurValues /> */}
    <FooterBottomBackground>
      <FooterWrapper>
        <FooterNav />
        <Terms />
      </FooterWrapper>
    </FooterBottomBackground>
  </FooterUpperBackground>
);

export default Footer;
