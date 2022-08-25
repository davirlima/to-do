import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* :root {
    --gray-100: #f2f2f2;
    --gray-200: #d9d9d9;
    --gray-300: #808080;
    --gray-400: #333333;
    --gray-500: #262626;
    --gray-600: #1a1a1a;
    --gray-700: #0d0d0d;
  
    --purple: #8284fa;
    --purple-dark: #5660ce;
  
    --blue: #4ea8de;
    --blue-dark: rgb(30, 111, 159);
    --blue-dark-opacity: rgb(30, 111, 159, 0.2);
  
    --danger: #e25858;
  } */
  
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
