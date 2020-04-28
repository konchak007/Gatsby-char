import React from "react";
import styled from "styled-components";

const TermsBox = styled.div`
  color: white;
  font-size: small;
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const Terms = () => (
  <TermsBox>
    <div>Chattr™ 2018-2020. All rights reserved.</div>
    <div>Terms of Service | Privacy Policy</div>
  </TermsBox>
);

export default Terms;
