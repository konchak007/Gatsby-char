import React from "react";
import styled from "styled-components";

import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";

const Wrapper = styled.div`
  padding: 0 7%;
`;

const MainContent = () => (
  <main>
    <Wrapper>
      <FirstSection />
      <FirstSection reverse />
      <FirstSection />
      <SecondSection />
    </Wrapper>
  </main>
);
export default MainContent;
