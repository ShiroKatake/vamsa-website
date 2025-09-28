'use client';
import Image from 'next/image';
import React from 'react';
import {
  StyledDate,
  StyledDescription,
  StyledNewsItem,
} from './NewsItems.styled';
import Link from 'next/link';

export const NewsItem = () => {
  return (
    <StyledNewsItem>
      <Image
        src="https://picsum.photos/139/139"
        alt=""
        width={139}
        height={139}
      />
      <div>
        <h2>
          <Link href="#">News Heading</Link>
        </h2>
        <StyledDate>19/05/2025</StyledDate>
        <StyledDescription>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </StyledDescription>
      </div>
    </StyledNewsItem>
  );
};
