import React from "react";
import styled from "styled-components";

import data from "./data";

const MainBlock = styled.div`
  display: flex;
  text-align: left;
  justify-content: center;
  margin: 58px 0;
  background-color: #f0fcee;
  height: 30vw;

  flex-direction: ${(props) => (!(props.id % 2) ? "row" : "row-reverse")};
`;
const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #2d2d2d;
  margin: 60px;
`;
const ParagraphText = styled.p`
  margin-top: 25px;
`;
const Img = styled.img`
  width: 54%;
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
