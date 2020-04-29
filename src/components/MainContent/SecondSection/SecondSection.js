import React from "react";
import styled from "styled-components";

import WordBlock from "../../WordBlock/WordBlock";

const Section = styled.h2`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin: 100px 0;
`;
const SecondSection = () => (
  <Section>
    Let’s hire more
    <WordBlock text="humanly" color="#92b5fe" />
    together.
  </Section>
);
export default SecondSection;
