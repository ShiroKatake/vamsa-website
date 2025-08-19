import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-block;
  border: none;
  border-radius: 0.25em;
  background-color: ${({theme}) => theme.colors.primary};
  padding: 0.75em 1em;
  cursor: pointer;
  font-weight: 700;
  font-size: 1rem;
  line-height: 0.72;
`;
