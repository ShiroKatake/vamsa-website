import {RichTextRenderer} from '@/components/RichTextRenderer/RichTextRenderer';
import {apiClient} from '@/lib/contentful/apiClient';
import {IntroSection, IntroText} from './Page.styled';

export default async function Home() {
  const pageData = await apiClient.getHomepage();

  return (
    <main>
      <IntroSection>
        <h1 className="title" aria-hidden>
          VAMSA
        </h1>
        <IntroText>
          <p>Vietnamese Australian Mutual Association of NSW</p>
        </IntroText>
        <IntroText>
          <RichTextRenderer richTextField={pageData?.introText} />
        </IntroText>
      </IntroSection>
      <h2>{pageData?.eventsSectionTitle}</h2>
      <h2>{pageData?.activitiesSectionTitle}</h2>
      <h2>{pageData?.socialSectionTitle}</h2>
    </main>
  );
}
