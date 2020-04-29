import React from "react";
import styled from "styled-components";
// import { graphql } from "gatsby";
// import Img from "gatsby-image";
import facebook from "../../../images/facebook.png";
import instagram from "../../../images/instag.png";
import linked from "../../../images/in.png";

const Container = styled.div``;

const MessengersLogo = () => (
  <Container>
    <a>
      <img src={facebook} />
    </a>
    <a>
      <img src={facebook} />
    </a>
    <a>
      <img src={facebook} />
    </a>
  </Container>
);

export default MessengersLogo;
