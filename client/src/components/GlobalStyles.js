import { createGlobalStyle } from 'styled-components';
import Reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${Reset};

    a{
        text-decoration: none;
        color: inherit;
    }

    *{
        box-sizing: border-box;
    }

    body{
        font-family: Inconsolata, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 12px;
    }

    .fw-color {
      color: #0A8A8A;
    }
    
    .fw-bgcolor {
      background-color: #0A8A8A;
    }

    .default-bgcolor {
      background-color: #F0F0F0;
    }

    .container {
      width: 100%;
      max-width: 1280px;
      margin: 0 auto;
    }

    @media (max-width: 600px) {
      .container {
        padding: 0 1%;
      }
    }
`;

export default globalStyles;
