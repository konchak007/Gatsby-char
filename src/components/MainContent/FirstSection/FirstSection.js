import React from "react";
import styled from "styled-components";

import assistingWoman from "../../../images/woman-assisting-patient-in-wheelchair.png";

const MainBlock = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;

  margin: 58px 0;
`;
const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 100px;

  background-color: #f0fcee;
`;
const ParagraphText = styled.p`
  margin-top: 45px;
`;
const FirstSection = () => (
  <MainBlock>
    <div>
      <img src={assistingWoman} width="650px" />
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
