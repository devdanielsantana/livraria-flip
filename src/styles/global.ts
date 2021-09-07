import { createGlobalStyle } from 'styled-components';
import { theme } from '../assets/themes/theme';

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
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    color: ${theme.colors.lightContent};
  }

  h1, h2, h3 {
    font-family: 'Poppins', sans-serif;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  #root {
    max-width: 100%;
    margin: 0 auto;
    padding: 40px 20px;
  }

`;
