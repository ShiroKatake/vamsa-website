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
import {HomepageEntry} from '@/lib/contentful/types';
import {EventStatus, getEvents} from '@/lib/eventbrite/apiClient';

export default async function Home() {
  const pageData: HomepageEntry = await apiClient.getHomepage();
  const events = await getEvents(EventStatus.DRAFT);
  console.log(events[0].name.html);
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
              <RichTextRenderer richTextField={pageData?.introText} />
            </IntroText>
          </Text>
        </Intro>
        <SlideshowContainer>
          <StyledSlideshow images={pageData?.slideshowCollection?.items} />
        </SlideshowContainer>
      </IntroSection>
      <h2>{pageData?.eventsSectionTitle}</h2>
      <h2>{pageData?.activitiesSectionTitle}</h2>
      <h2>{pageData?.socialSectionTitle}</h2>
    </main>
  );
}
