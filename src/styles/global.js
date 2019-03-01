import { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #9b65e6;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: atialiased !important;
    font-family: sans-serif;
  }

  .avatar {
    border-radius: 100;
    width: 48;
    height: 48;
  }

`;

export default GlobalStyle;
