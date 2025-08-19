import styled from 'styled-components';

export const StyledNavBar = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0.5em 1em;
    background-color: ${({theme}) => theme.colors.background2};
  }

  li.logo {
    width: 2.6875rem;
  }

  li:not(.button):not(.logo) {
    font-size: 1.125rem;
    font-weight: 700;
    color: ${({theme}) => theme.colors.white};
    padding: 4px 0 2px 0;
    border-bottom: 3px solid transparent;
  }

  li.link:hover,
  li.link.active {
    border-bottom: 3px solid ${({theme}) => theme.colors.white};
  }

  li.language {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;

    div {
      display: flex;
      gap: 0.25rem;
      cursor: pointer;
    }
  }
`;
