import type {Document} from '@contentful/rich-text-types';
import {FragmentNames} from './fragments';

export type Fragment = {
  fragment: string;
  dependencies?: FragmentNames[];
};

export type Sys = {
  id: string;
  firstPublishedAt?: string;
  publishedAt?: string;
};

export type AssetBlock = {
  sys: Sys;
  title?: string;
  description: string;
  contentType?: string;
  url: string;
  width: number;
  height: number;
};

export type ContentfulEntryGeneric = {
  sys: Sys;
  __typename: string;
  [key: string]: any;
};

export type ContentfulRichTextField = {
  json: Document;
  links?: {
    assets?: {
      block?: Array<AssetBlock>;
    };
    entries?: {
      block?: Array<ContentfulEntryGeneric>;
    };
  };
};
