import React from "react";
import styled from "styled-components";

const Block = styled.span`
  font-size: 3rem;

  margin-left: 30px;
  padding: 0 30px 0px 30px;

  height: 70px;
  background-color: ${(props) => props.color};
`;

const wordBlock = ({ text, color }) => (
  <>
    <Block color={color}>{text}</Block>
  </>
);

export default wordBlock;
