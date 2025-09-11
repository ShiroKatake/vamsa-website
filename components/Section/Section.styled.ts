import styled from 'styled-components';

export const ContentContainer = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  padding: 3rem 0;
`;

export const StyledSection = styled.section`
  background-color: ${({theme}) => theme.colors.background};
`;
