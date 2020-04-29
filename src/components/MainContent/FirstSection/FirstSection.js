import React from "react";
import styled from "styled-components";

import data from "./data";

const MainBlock = styled.div`
  display: flex;
  margin: 3rem 0;

  @media (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Paragraph = styled.div`
  color: #2d2d2d;
  margin: 60px;
  width: 46%;

  @media (max-width: 1150px) {
    width: 100%;
  }
`;
const ParagraphText = styled.p`
  margin-top: 25px;
`;
const Img = styled.img`
  width: 54%;
  @media (max-width: 1150px) {
    width: 100%;
  }
`;
const FirstSection = () => {
  return (
    <>
      {data.map((item, id) => {
        return (
          <section>
            <MainBlock id={id}>
              <Img src={item.image} />
              <Paragraph>
                <h3>{item.title}</h3>
                <ParagraphText>{item.text}</ParagraphText>
              </Paragraph>
            </MainBlock>
          </section>
        );
      })}
    </>
  );
};
export default FirstSection;
