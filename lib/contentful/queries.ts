import {HOMEPAGE_FRAGMENT} from './fragments';

export const HOMEPAGE_QUERY = /* GraphQL */ `
  query {
    homepageCollection(limit: 1) {
      items {
        ...Homepage
      }
    }
  }

  ${HOMEPAGE_FRAGMENT}
`;
