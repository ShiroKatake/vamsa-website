import Link from 'next/link';
import styled from 'styled-components';

export const StyledNewsItem = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.75rem;
`;

export const StyledDate = styled.p`
  padding: 0.5rem 0 0.75rem 0;
`;

export const StyledDescription = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

export const StyledLink = styled(Link)`
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:hover,
  &:focus {
    border-bottom: 3px solid ${({theme}) => theme.colors.primary};
  }
`;
