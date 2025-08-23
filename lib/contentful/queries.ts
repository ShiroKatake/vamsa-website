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
