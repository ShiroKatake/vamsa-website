import {Fragment} from './types';

export const enum FragmentNames {
  Image = 'Image',
  Homepage = 'Homepage',
}

export type Fragments = {
  [key in FragmentNames]: Fragment;
};

export const fragments: Fragments = {
  [FragmentNames.Image]: {
    fragment: /* GraphQL */ `
    #graphql
    fragment ${FragmentNames.Image} on Asset {
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
  `,
  },
  [FragmentNames.Homepage]: {
    fragment: /* GraphQL */ `
      fragment ${FragmentNames.Homepage} on Homepage {
        entryTitle
        introText {
          json
        }
        slideshowCollection(limit: 5) {
          items {
            ...${FragmentNames.Image}
          }
        }
        eventsSectionTitle
        activitiesSectionTitle
        socialSectionTitle
      }
    `,
    dependencies: [FragmentNames.Image],
  },
};
