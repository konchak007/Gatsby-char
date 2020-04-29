import React from "react";

import styled from "styled-components";
import ValueCase from "./ValueCase";

const Wrapper = styled.div`
  padding: 0 7%;
  text-align: center;
  color: white;
  padding-top: 10rem;

  @media (max-width: 1050px) {
    padding-top: 5rem;
  }
  @media (max-width: 1220px) {
    padding-bottom: 20rem;
  }
`;
const Title = styled.h2`
  margin-bottom: 7rem;
`;

const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 5rem;

  @media (max-width: 710px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
const SectionOurValues = () => (
  <Wrapper>
    <Title>Our Values</Title>
    <Container>
      <ValueCase
        title="Integrity"
        subtitle="Do what you say, 100% of the time."
      />
      <ValueCase
        title="Leadership"
        subtitle="Be intuitive, empathetic and inspiring."
      />

      <ValueCase
        title="Transparency"
        subtitle="Candid opinions, loosely held."
      />
      <ValueCase
        title="Communication"
        subtitle="Chatting openly, solves every problem."
      />

      <ValueCase title="Love" subtitle="Lead with love and be nice." />
      <ValueCase title="Virtuous" subtitle="Always do the right thing." />
    </Container>
  </Wrapper>
);

export default SectionOurValues;
