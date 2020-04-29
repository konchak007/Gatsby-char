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

  background-color: ${(props) => props.backgroundColor};
  flex-direction: ${(props) => (props.id % 2 ? "row-reverse" : "row")};
`;
const Paragraph = styled.div`
  width: 46%;
  color: #2d2d2d;
  padding: 5rem;

  @media (max-width: 1150px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    padding: 2rem;
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
          <article key={item.title}>
            <MainBlock id={id} backgroundColor={item.color}>
              <Img src={item.image} />
              <Paragraph>
                <h3>{item.title}</h3>
                <ParagraphText>{item.text}</ParagraphText>
              </Paragraph>
            </MainBlock>
          </article>
        );
      })}
    </>
  );
};
export default FirstSection;
