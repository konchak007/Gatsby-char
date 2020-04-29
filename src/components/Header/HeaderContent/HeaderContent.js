import React from "react";
import styled from "styled-components";

import WordBlock from "../../WordBlock/WordBlock";
import headerBackground from "../../../images/header-blue.png";

const Tagline = styled.div`
  display: flex;
  align-items: center;
  min-height: 600px;
`;
const MainTitle = styled.h1`
  width: 700px;
  line-height: 79px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  padding: 0 7%;
`;

const HeaderBackground = styled.div`
  background: url(${headerBackground}) center;
  background-size: cover;
  height: 45vw;
`;
const HeaderContent = () => (
  <HeaderBackground>
    <Wrapper>
      <Tagline>
        <MainTitle>
          {" "}
          Driven by AI automation so you can be more{" "}
          <WordBlock text="human." color="#21C904" />
        </MainTitle>
      </Tagline>
    </Wrapper>
  </HeaderBackground>
);

export default HeaderContent;
