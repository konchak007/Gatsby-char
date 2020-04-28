import React from "react"
import styled from "styled-components"

import WordBlock from "../wordBlock/wordBlock"
import headerBackground from "/Users/mac/Desktop/chatrr/src/images/header-blue.png"

const Tagline = styled.div`
  background: url(${headerBackground}) center;
  background-size: cover;
  height: 560px;
  display: flex;
  align-items: center;
`
const MainTitle = styled.h1`
  width: 45vw;
  line-height: 79px;
  @media (max-width: 780px) {
    width: 100vw;
  }
`
const HeaderContent = () => (
  <Tagline>
    <MainTitle>
      {" "}
      Driven by AI automation so you can be more{" "}
      <WordBlock text="human." color="#21C904" width="170px" />
    </MainTitle>
  </Tagline>
)

export default HeaderContent
