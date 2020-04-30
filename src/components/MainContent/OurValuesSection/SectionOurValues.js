import React from "react";

import styled from "styled-components";
import ValueCase from "./ValueCase";

const Wrapper = styled.div`
  color: white;
  padding-bottom: 20rem;
  position: relative;

  @media (max-width: 620px) {
    padding-top: 5rem;
  }
`;
const Title = styled.h2`
  margin-top: 5rem;
  margin-bottom: 7rem;
  text-align: center;
`;

const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 9rem;
  grid-column-gap: 2rem;

  @media (max-width: 710px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const HorizontalLine = styled.span`
  width: 96%;
  height: 1px;
  background-color: white;
  position: absolute;
  margin-left: 1rem;
  top: 47%;

  @media (max-width: 710px) {
    display: none;
  }
`;
const VerticalLine = styled.span`
  width: 1px;
  height: 53%;
  background-color: white;
  position: absolute;
  margin-left: 1rem;
  top: 20%;
  left: 32%;
  @media (max-width: 710px) {
    display: none;
  }
`;
const RightVerticalLine = styled.span`
  left: 66%;
`;
const SectionOurValues = () => (
  <>
    <Wrapper>
      <Title>Our Values</Title>
      <Container>
        <ValueCase
          title="Integrity"
          subtitle="Do what you say, 100% of the time."
        />
        <ValueCase
          title="Transparency"
          subtitle="Candid opinions, loosely held."
        />
        <ValueCase title="Love" subtitle="Lead with love and be nice." />
        <ValueCase
          title="Leadership"
          subtitle="Be intuitive, empathetic and inspiring."
        />

        <ValueCase
          title="Communication"
          subtitle="Chatting openly, solves every problem."
        />

        <ValueCase title="Virtuous" subtitle="Always do the right thing." />
      </Container>
      <HorizontalLine />
      <VerticalLine />
      <RightVerticalLine as={VerticalLine} />
    </Wrapper>
  </>
);

export default SectionOurValues;
