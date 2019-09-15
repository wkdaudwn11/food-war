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

    .fw-invalid-feedback {
      display: flex;
      align-items: center;
      justify-content: left;
      height: 30px;
      color: red;
    }

    input.is-invalid {
      border: 1px solid red;
    }

    .default-border {
      border: 1px solid #dee2e6;
    }
`;

export default globalStyles;
