import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Gambetta';
    src: url('./fonts/Gambetta-Regular.eot');
    src: url('./fonts/Gambetta-Regular.eot?#iefix') format('embedded-opentype'),
         url('./fonts/Gambetta-Regular.otf') format('opentype'),
         url('./fonts/Gambetta-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('./fonts/Roboto-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('./fonts/Roboto-Bold.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: url('./bg_image.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: ${colors.text.neutral.default};
  }
`;
