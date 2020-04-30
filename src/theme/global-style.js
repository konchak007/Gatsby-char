import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
    font-size:1rem;
    line-height: 1.5;
    font-family:Noto Sans,sans-serif;
    word-spacing: 1px;
    margin:0;
    padding:0;
    -webkit-font-smoothing: antialiased;
    


  }
  h1{
    color:white;
    font-weight:bold;
    font-size:3rem;
    
  }
  h2{
    font-weight:bold;
    font-size:2.4rem;

  }
  h3{
    font-weight:bold;
    font-size:1.8rem;
  
  }
  p{
    font-weight: 400;
    line-height: 1.7rem;
    font-size: 1.125rem;
  }
  a{
    color:black;
  }
`;
