'use client';
import styled from 'styled-components';

export const PageContainer = styled.div`
  background-color: ${({theme}) => theme.colors.background};
  padding: 2rem 4rem;
  min-height: 100%;
`;

export const Background = styled.div`
  display: grid;
  grid-template-columns: 1fr 20rem;
  background-color: ${({theme}) => theme.colors.white};
  max-width: 1200px;
  margin: 0 auto;
`;

export const NewsContainer = styled.main`
  padding: 2rem;
`;

export const OtherNewsContainer = styled.aside`
  padding: 2rem;
`;

export const NewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 3rem 0 0;
  list-style: none;
  padding: 0;
`;
