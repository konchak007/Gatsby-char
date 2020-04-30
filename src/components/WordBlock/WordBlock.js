import React from "react";
import styled from "styled-components";

const Block = styled.span`
  font-size: 3rem;

  margin: 0 1.3rem;
  padding: 0 1.3rem;

  height: 70px;
  background-color: ${(props) => props.color};
  color: white;
`;

const wordBlock = ({ text, color }) => <Block color={color}>{text}</Block>;

export default wordBlock;
