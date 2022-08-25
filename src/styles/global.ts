import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  button {
    cursor: pointer;
  }
  
  body {
    background-color: ${(props) => props.theme.gray_600};
    -webkit-font-smothing: antialiased;
    color: ${(props) => props.theme.gray_300};
  }
  
  body,
  input,
  textarea,
  button {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.4;
  }
  
`;
