import React from "react";
import styled from "styled-components";

import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import OurValuesSection from "./OurValuesSection/SectionOurValues";
import footerUpperBackground from "../../images/ourvalues1.png";

const Wrapper = styled.section`
  padding: 7%;
`;
const Background = styled.section`
  padding: 0 7%;

  background: url(${footerUpperBackground}) center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1627px) {
    height: auto;
  }
`;

const MainContent = () => (
  <main>
    <Wrapper>
      <FirstSection />
      <SecondSection />
    </Wrapper>
    <Background>
      {" "}
      <OurValuesSection />{" "}
    </Background>
  </main>
);
export default MainContent;
