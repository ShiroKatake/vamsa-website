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
  EventCardGrid,
  SectionTitle,
  StyledSection,
} from './Page.styled';
import {HomepageEntry} from '@/lib/contentful/types';
import {EventStatus, getEvents} from '@/lib/eventbrite/apiClient';
import {EventCard} from '@/components/EventCard/EventCard';

export default async function Home() {
  const pageData: HomepageEntry = await apiClient.getHomepage();
  const events = await getEvents(EventStatus.DRAFT);
  console.log(events[0]);
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
      <StyledSection>
        <SectionTitle>{pageData?.eventsSectionTitle}</SectionTitle>
        <EventCardGrid>
          <EventCard
            url={events[0].url}
            name={events[0].name.html}
            imageSrc={events[0].logo.url}
            description={events[0].description.html}
          />{' '}
          <EventCard
            url={events[0].url}
            name={events[0].name.html}
            imageSrc={events[0].logo.url}
            description={events[0].description.html}
          />{' '}
          <EventCard
            url={events[0].url}
            name={events[0].name.html}
            imageSrc={events[0].logo.url}
            description={events[0].description.html}
          />
          <EventCard
            url={events[0].url}
            name={events[0].name.html}
            imageSrc={events[0].logo.url}
            description={events[0].description.html}
          />
        </EventCardGrid>
      </StyledSection>
      <StyledSection>
        <SectionTitle>{pageData?.activitiesSectionTitle}</SectionTitle>
      </StyledSection>
      <StyledSection>
        <SectionTitle>{pageData?.socialSectionTitle}</SectionTitle>
      </StyledSection>
    </main>
  );
}
