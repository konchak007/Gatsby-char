import React from "react";
import styled from "styled-components";

import data from "./data";

const MainBlock = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  justify-content: center;
  margin: 58px 0;
  background-color: row;
`;
const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #2d2d2d;
  width: 47%;
  margin: 100px;
`;
const ParagraphText = styled.p`
  margin-top: 45px;
`;
const Img = styled.img``;
const FirstSection = () => {
  return (
    <>
      {data.map((item) => {
        return (
          <section>
            <MainBlock>
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
