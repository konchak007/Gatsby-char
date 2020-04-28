import React from "./node_modules/react";
import styled from "./node_modules/styled-components";

const TermsBox = styled.div`
  color: white;
  font-family: ubuntu mono, sans-serif;
  font-size: small;

  display: flex;
  justify-content: space-between;
`;

const Terms = (props) => (
  <TermsBox>
    <div>Chattr™ 2018-2020. All rights reserved.</div>
    <div>Terms of Service | Privacy Policy</div>
  </TermsBox>
);

export default Terms;
