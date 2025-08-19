import {createGlobalStyle, css} from 'styled-components';

const style = css`
  body {
    margin: 0;
    background-color: ${({theme}) => theme.colors.black};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    font-family: var(--font-inter);
  }
`;

const GlobalStyle = createGlobalStyle`
  ${style}
`;

export default GlobalStyle;
