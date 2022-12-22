import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  font-family: "Montserrat", sans-serif;
  background-color: #eee;
  padding: 20px;
  margin: 10px auto;
}
`;