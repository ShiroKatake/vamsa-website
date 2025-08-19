import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  border-radius: 0.25em;
  background-color: ${({theme}) => theme.colors.primary};
  padding: 0.9em 1.35em;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 0.72;
`;
