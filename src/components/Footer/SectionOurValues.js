import React from "react"

import styled from "styled-components"
import ValueCase from "./ValueCase"

const Wrapper = styled.div`
  padding: 20% 7% 5%;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: white;
`
const CasesWrapper = styled.div`
  display: flex;
  margin-top: 100px;
  width: 100%;
  justify-content: space-around;
`
const SectionOurValues = () => (
  <Wrapper>
    <h2>Our Values</h2>
    <CasesWrapper>
      <ValueCase
        title="Integrity"
        subtitle="Do what you say, 100% of the time."
      />
      <ValueCase
        title="Transparency"
        subtitle="Candid opinions, loosely held."
      />
      <ValueCase title="Love" subtitle="Lead with love and be nice." />
    </CasesWrapper>
    <CasesWrapper>
      <ValueCase
        title="Leadership"
        subtitle="Be intuitive, empathetic and inspiring."
      />
      <ValueCase
        title="Communication"
        subtitle="Chatting openly, solves every problem."
      />
      <ValueCase title="Virtuous" subtitle="Always do the right thing." />
    </CasesWrapper>
  </Wrapper>
)

export default SectionOurValues
