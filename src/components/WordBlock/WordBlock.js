import React from "react";
import styled from "styled-components";

const Block = styled.span`
  font-size: 3rem;

  margin: 0 20px;
  padding: 0 20px 0px 20px;

  height: 70px;
  background-color: ${(props) => props.color};
  color: white;
`;

const wordBlock = ({ text, color }) => <Block color={color}>{text}</Block>;

export default wordBlock;
