import {RichTextRenderer} from '@/components/RichTextRenderer/RichTextRenderer';
import {apiClient} from '@/lib/contentful/apiClient';
import {
  Intro,
  Text,
  IntroSection,
  IntroText,
  StyledSlideshow,
  SlideshowContainer,
  OrgFullName,
} from './Page.styled';

export default async function Home() {
  const pageData = await apiClient.getHomepage();

  if (!pageData) {
    return null;
  }

  return (
    <main>
      <IntroSection>
        <Intro>
          <Text>
            <h1 className="title" aria-hidden>
              VAMSA
            </h1>
            <IntroText>
              <OrgFullName>
                Vietnamese Australian Mutual Association of NSW
              </OrgFullName>
              {pageData?.introText ? (
                <RichTextRenderer richTextField={pageData?.introText} />
              ) : null}
            </IntroText>
          </Text>
        </Intro>
        {pageData?.slideshowCollection?.items ? (
          <SlideshowContainer>
            <StyledSlideshow images={pageData?.slideshowCollection?.items} />
          </SlideshowContainer>
        ) : null}
      </IntroSection>
      <h2>{pageData?.eventsSectionTitle}</h2>
      <h2>{pageData?.activitiesSectionTitle}</h2>
      <h2>{pageData?.socialSectionTitle}</h2>
    </main>
  );
}
