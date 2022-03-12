import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
  #root {
    position: relative;
    height: 100%;
  }
  html, body{
    font-size: 15px;
    width: 100%;
    height: 100%;
  }
  button{
    border: none;
  }
  button:focus{
    outline:none;
    box-shadow: none;
  }
`;
export default GlobalStyle;
