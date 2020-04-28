import React from "react";
import styled from "styled-components";

import FirstSection from "./FirstSection/FirstSection";

const Wrapper = styled.div`
  padding: 0 7%;
`;
const MainContent = () => (
  <main>
    <Wrapper>
      <FirstSection />
      <FirstSection />
      <FirstSection />
    </Wrapper>
  </main>
);
export default MainContent;
