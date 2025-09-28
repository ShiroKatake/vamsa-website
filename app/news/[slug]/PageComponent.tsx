'use client';

import {NewsEntry} from '@/lib/contentful/types';
import React from 'react';
import {contentfulLoader, dateConverter} from '@/lib/contentful/utils.client';
import {StyledImage} from './PageComponent.styled';
import {RichTextRenderer} from '@/components/RichTextRenderer/RichTextRenderer';

export const PageComponent = ({pageData}: {pageData: NewsEntry}) => {
  return (
    <>
      <h1>{pageData?.title}</h1>
      <p>{dateConverter(pageData?.datePublished ?? '')}</p>
      {pageData?.image?.url ? (
        <StyledImage
          src={pageData?.image?.url}
          alt={pageData?.image?.description ?? pageData?.image?.title ?? ''}
          width={pageData?.image?.width}
          height={pageData?.image?.height}
          loader={() =>
            contentfulLoader({
              src: pageData?.image?.url as string,
              fit: 'fill',
              focus: 'center',
            })
          }
        />
      ) : null}
      {pageData?.content ? (
        <RichTextRenderer richTextField={pageData?.content} />
      ) : null}
    </>
  );
};
