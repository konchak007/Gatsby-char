import React from "react"
import styled from "styled-components"

import restrangle from "../../images/kolo.png"

const Case = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: ubuntu mono, sans-serif;
`
const Img = styled.img`
  width: 75px;
  margin: 0 auto;
`
const Title = styled.h3`
  margin-top: 20px;
  margin-bottom: 30px;
`
const SubTitle = styled.div`
  font-weight: 200;
`

const ValueCase = props => (
  <Case>
    <Img src={restrangle} />
    <Title>{props.title}</Title>
    <SubTitle>{props.subtitle}</SubTitle>
  </Case>
)

export default ValueCase
