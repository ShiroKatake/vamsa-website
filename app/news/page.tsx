import React from 'react';
import {
  Background,
  NewsContainer,
  NewsList,
  OtherNewsContainer,
  PageContainer,
} from './Page.styled';
import {NewsItem} from '@/components/NewsItem/NewsItem';

export default async function Page() {
  return (
    <PageContainer>
      <Background>
        <NewsContainer>
          <h1>News in September</h1>
          <NewsList>
            <li>
              <NewsItem />
            </li>
            <li>
              <NewsItem />
            </li>
            <li>
              <NewsItem />
            </li>
            <li>
              <NewsItem />
            </li>
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
