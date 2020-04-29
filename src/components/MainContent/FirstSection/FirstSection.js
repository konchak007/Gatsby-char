import React from "react";
import styled from "styled-components";

import assistingWoman from "../../../images/woman-assisting-patient-in-wheelchair.png";

const MainBlock = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  text-align: left;
  justify-content: center;
  margin: 58px 0;
`;
const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px;
  background-color: #f0fcee;
  color: #2d2d2d;

  max-width: 550px;
`;
const ParagraphText = styled.p`
  margin-top: 45px;
`;
const Img = styled.img`
  max-width: 650px;
`;
const FirstSection = ({ reverse }) => (
  <MainBlock reverse={reverse}>
    <div>
      <Img src={assistingWoman} />
    </div>
    <Paragraph>
      <h3>How We Started</h3>
      <ParagraphText>
        We started Chattr™ to do our part in solving the Home Healthcare
        recruiting crisis. Sterile applications, inefficient processes and a
        lack of transparency only compound the challenges of finding and hiring
        top quality candidates.
      </ParagraphText>
    </Paragraph>
  </MainBlock>
);
export default FirstSection;
