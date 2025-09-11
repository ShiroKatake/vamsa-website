'use client';
import {ContentContainer, StyledSection} from './Section.styled';

export const Section = ({children}: React.PropsWithChildren) => {
  return (
    <section>
      <ContentContainer>{children}</ContentContainer>
    </section>
  );
};

export const AltColorSection = ({children}: React.PropsWithChildren) => {
  return (
    <StyledSection>
      <ContentContainer>{children}</ContentContainer>
    </StyledSection>
  );
};
