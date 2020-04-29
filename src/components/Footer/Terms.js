import React from "react";
import styled from "styled-components";

const TermsBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const CopyRight = styled.div`
  font-size: 12px;
  color: white;

  @media (max-width: 500px) {
    margin: 0 auto;
  }
`;

const Terms = () => (
  <TermsBox>
    <CopyRight>Chattr™ 2018-2020. All rights reserved.</CopyRight>
    <CopyRight>Terms of Service | Privacy Policy</CopyRight>
  </TermsBox>
);

export default Terms;
