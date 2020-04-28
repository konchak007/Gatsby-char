import React from "react";
import styled from "styled-components";

const ButtonCover = styled.button`
  text-transform: uppercase;
  display: flex;
  font-weight: bold;
  border: solid 2px;
  outline: none;
  cursor: pointer;
  padding: 7.5px 30px;
  background-color: transparent;
  margin: 0 25px;
`;

const Button = ({ text }) => <ButtonCover>{text}</ButtonCover>;

export default Button;
