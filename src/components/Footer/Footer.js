import React from "react";

import styled from "styled-components";

import footerBottomBackground from "../../images/black.png";

import Terms from "./Terms";
import FooterNav from "./FooterNav/FooterNav";

const FooterBottomBackground = styled.div`
  height: 500px;
  background: url(${footerBottomBackground});
  background-repeat: no-repeat;
  background-size: cover;

  margin-top: -12em;
  @media (max-width: 500px) {
    margin-top: -14em;
  }
`;

const FooterWrapper = styled.div`
  padding: 100px 7% 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Footer = () => (
  <footer>
    <FooterBottomBackground>
      <FooterWrapper>
        <FooterNav />
        <Terms />
      </FooterWrapper>
    </FooterBottomBackground>
  </footer>
);

export default Footer;
