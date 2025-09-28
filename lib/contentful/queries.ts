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
      newsCollection(limit: 10) {
        items {
          ...${FragmentNames.News}
        }
      }
    }
  `,
  dependencies: [FragmentNames.News],
};

export const NEWS_PAGE: Fragment = {
  fragment: /* GraphQL */ `
    query($slug: String!) {
      newsCollection(where: {slug: $slug}, limit: 1) {
        items {
          ...${FragmentNames.News}
          content {
            links {
              assets {
                block {
                  ...${FragmentNames.Image}
                }
              } 
            }
            json
          }
        }
      }
    }
  `,
  dependencies: [FragmentNames.News],
};
