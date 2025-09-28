import {css, RuleSet} from 'styled-components';

export const phoneOnly = (content: RuleSet<object>) => css`
  @media (max-width: 599px) {
    ${content}
  }
`;

export const tabletPortraitUp = (content: RuleSet<object>) => css`
  @media (min-width: 600px) {
    ${content}
  }
`;

export const tabletLandscapeUp = (content: RuleSet<object>) => css`
  @media (min-width: 900px) {
    ${content}
  }
`;

export const desktopUp = (content: RuleSet<object>) => css`
  @media (min-width: 1200px) {
    ${content}
  }
`;

export const bigDesktopUp = (content: RuleSet<object>) => css`
  @media (min-width: 1800px) {
    ${content}
  }
`;
