import React from "react";
import styled from "styled-components";

import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import OurValuesSection from "./OurValuesSection/SectionOurValues";
import footerUpperBackground from "../../images/ourvalues1.png";

const Wrapper = styled.div`
  padding: 50% 7%;
`;
const Background = styled.div`
  height: 80vw;

  background: url(${footerUpperBackground});

  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 810px) {
    height: 100%;
  }
`;

const MainContent = () => (
  <main>
    <Wrapper>
      <FirstSection />
      <SecondSection />
    </Wrapper>
    {/* <Background> <OurValuesSection /> </Background> */}
  </main>
);
export default MainContent;
