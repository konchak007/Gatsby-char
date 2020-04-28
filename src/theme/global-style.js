import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-size:15px;
    font-family:Noto Sans,sans-serif;
    font-weight:400;
    margin:0;
    padding:0;

  }
  h1{
    color:white;
      font-weight:bold;
      font-size:3rem;
      margin: 0 auto;
      font-family: ubuntu mono,sans-serif;
  }
  h2{
    font-weight:bold;
    font-size:2.4rem;
    font-family: ubuntu mono,sans-serif;
  }
  h3{
    font-weight:bold;
    font-size:1.3rem;
    font-family: ubuntu mono,sans-serif;
  }
 
`;
