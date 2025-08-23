import {createGlobalStyle, css} from 'styled-components';

const style = css`
  body {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1.title {
    margin: 0;
    padding-top: 2.5rem;
    font-size: 4rem;
    font-family: var(--font-thu-phap);
    line-height: 1.1;
  }

  h2 {
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
  }

  * {
    font-family: var(--font-inter);
  }
`;

const GlobalStyle = createGlobalStyle`
  ${style}
`;

export default GlobalStyle;
