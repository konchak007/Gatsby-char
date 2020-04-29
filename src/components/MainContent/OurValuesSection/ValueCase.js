import React from "react";
import styled from "styled-components";

import restrangle from "../../../images/kolo.svg";

const Case = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img = styled.img`
  width: 75px;
`;
const Title = styled.h3`
  margin-top: 20px;
  margin-bottom: 30px;
`;
const SubTitle = styled.div`
  font-size: 1.2rem;
`;

const ValueCase = ({ title, subtitle }) => (
  <Case>
    <Img src={restrangle} />
    <Title>{title}</Title>
    <SubTitle>{subtitle}</SubTitle>
  </Case>
);

export default ValueCase;
