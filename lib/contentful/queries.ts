import {FragmentNames} from './fragments';
import {Fragment} from './types';

export const HOMEPAGE_QUERY: Fragment = {
  fragment: /* GraphQL */ `
    query {
      homepageCollection(limit: 1) {
        items {
          ...${FragmentNames.Homepage}
        }
      }
    }
  `,
  dependencies: [FragmentNames.Homepage],
};

export const ALL_NEWS_QUERY: Fragment = {
  fragment: /* GraphQL */ `
    query {
      newsCollection {
        items {
          sys {
            id
          }
          title
          slug
          datePublished
          summary
          image {
            sys {
              id
            }
            __typename
            title
            description
            url
            width
            height
            contentType
          }
        }
      }
    }
  `,
};
