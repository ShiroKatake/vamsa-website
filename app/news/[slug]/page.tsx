import {apiClient} from '@/lib/contentful/apiClient';
import {
  PageContainer,
  Background,
  NewsContainer,
  OtherNewsContainer,
} from '../Page.styled';
import {PageComponent} from './PageComponent';

export default async function Page({
  params,
}: {
  params: Promise<{slug: string}>;
}) {
  const {slug} = await params;
  const pageData = await apiClient.getNewsPage(slug);

  if (!pageData) {
    return null;
  }

  return (
    <PageContainer>
      <Background>
        <NewsContainer>
          <PageComponent pageData={pageData} />
        </NewsContainer>
        <OtherNewsContainer>
          <h2>Other News</h2>
          <h3>August 2025</h3>
          <ul>
            <li>News item 1</li>
            <li>News item 2</li>
          </ul>
          <h3>July 2025</h3>
          <ul>
            <li>News item 1</li>
            <li>News item 2</li>
          </ul>
        </OtherNewsContainer>
      </Background>
    </PageContainer>
  );
}
