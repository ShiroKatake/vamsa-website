'use client';
import {Slideshow} from '@/components/Slideshow/Slideshow';
import styled from 'styled-components';

export const IntroSection = styled.section`
  display: flex;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 50%;
`;

export const StyledSection = styled.section`
  max-width: 75rem;
  padding: 3rem 0;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

export const Text = styled.div`
  margin: auto;
  max-width: 70%;
`;

export const IntroText = styled.div`
  font-size: 1.25rem;

  p {
    font-family: var(--font-inria-serif);
  }
`;

export const OrgFullName = styled.p`
  font-style: italic;
`;

export const StyledSlideshow = styled(Slideshow)`
  height: 100%;
  min-width: 50%;
`;

export const SlideshowContainer = styled.div`
  min-width: 50%;
`;

export const EventCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 20rem);
  justify-content: center;
  gap: 1rem;
`;
