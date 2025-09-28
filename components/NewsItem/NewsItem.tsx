'use client';
import Image from 'next/image';
import React from 'react';
import {
  StyledDate,
  StyledDescription,
  StyledLink,
  StyledNewsItem,
} from './NewsItems.styled';
import {NewsEntry} from '@/lib/contentful/types';
import {contentfulLoader, dateConverter} from '@/lib/contentful/utils.client';

export const NewsItem = ({
  title,
  slug,
  summary,
  image,
  datePublished,
}: NewsEntry) => {
  const date = dateConverter(datePublished ?? '');
  return (
    <StyledNewsItem>
      {image?.url ? (
        <Image
          src={image?.url}
          alt={image?.description ?? image?.title ?? ''}
          width={139}
          height={139}
          loader={() =>
            contentfulLoader({
              src: image?.url,
              width: 139,
              height: 139,
              fit: 'fill',
              focus: 'center',
            })
          }
        />
      ) : (
        <div></div>
      )}
      <div>
        <h2>
          <StyledLink href={`/news/${slug}`}>{title}</StyledLink>
        </h2>
        <StyledDate>{date}</StyledDate>
        <StyledDescription>{summary}</StyledDescription>
      </div>
    </StyledNewsItem>
  );
};
