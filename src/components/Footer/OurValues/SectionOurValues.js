import React from "react";

import styled from "styled-components";
import ValueCase from "./ValueCase";

const Wrapper = styled.div`
  padding: 20% 7% 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
`;
const CasesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;
const SectionOurValues = () => (
  <Wrapper>
    <h2>Our Values</h2>
    <Container>
      <CasesWrapper>
        <ValueCase
          title="Integrity"
          subtitle="Do what you say, 100% of the time."
        />
        <ValueCase
          title="Leadership"
          subtitle="Be intuitive, empathetic and inspiring."
        />
      </CasesWrapper>
      <CasesWrapper>
        <ValueCase
          title="Transparency"
          subtitle="Candid opinions, loosely held."
        />
        <ValueCase
          title="Communication"
          subtitle="Chatting openly, solves every problem."
        />
      </CasesWrapper>
      <CasesWrapper>
        <ValueCase title="Love" subtitle="Lead with love and be nice." />
        <ValueCase title="Virtuous" subtitle="Always do the right thing." />
      </CasesWrapper>
    </Container>
  </Wrapper>
);

export default SectionOurValues;
