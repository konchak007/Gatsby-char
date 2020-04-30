import React from "react";
import styled from "styled-components";

import WordBlock from "../../WordBlock/WordBlock";

const Section = styled.h2`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  text-align: center;
  margin: 10rem 0;
  color: #2d2d2d;
`;
const SecondSection = () => (
  <article>
    <Section>
      Let’s hire more
      <WordBlock text="humanly" color="#92b5fe" />
      together.
    </Section>
  </article>
);
export default SecondSection;
