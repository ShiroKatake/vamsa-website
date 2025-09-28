import React from 'react';
import {
  Background,
  NewsContainer,
  NewsList,
  OtherNewsContainer,
  PageContainer,
} from './Page.styled';
import {NewsItem} from '@/components/NewsItem/NewsItem';
import {apiClient} from '@/lib/contentful/apiClient';

export default async function Page() {
  const allNews = await apiClient.getAllNews();

  const newsSortedByDate = allNews?.sort((a, b) => {
    const dateA = new Date(a.datePublished ?? '');
    const dateB = new Date(b.datePublished ?? '');
    return dateB.getTime() - dateA.getTime();
  });

  if (!newsSortedByDate) {
    return null;
  }

  return (
    <PageContainer>
      <Background>
        <NewsContainer>
          <h1>News in September</h1>
          <NewsList>
            {newsSortedByDate.map((newsItem) => (
              <NewsItem key={newsItem.sys.id} {...newsItem} />
            ))}
          </NewsList>
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
