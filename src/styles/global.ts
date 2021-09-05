import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background: #fff;
    -webkit-font-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 100%;
    margin: 0 auto;
    padding: 40px 20px;
  }

`;
