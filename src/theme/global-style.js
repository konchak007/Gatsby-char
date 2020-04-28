import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
    font-size:15px;
    font-family:Noto Sans,sans-serif;
    margin:0;
    padding:0;

  }
  h1{
    color:white;
      font-weight:bold;
      font-size:3rem;
      margin: 0 auto;
    
  }
  h2{
    font-weight:bold;
    font-size:2.4rem;

  }
  h3{
    font-weight:bold;
    font-size:1.3rem;
    
  }
 
`;
