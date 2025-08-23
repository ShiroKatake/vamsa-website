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
