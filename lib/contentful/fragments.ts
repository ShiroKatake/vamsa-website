import {Fragment} from './types';

export const enum FragmentNames {
  Image = 'Image',
  Homepage = 'Homepage',
  News = 'News',
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
      #graphql
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
  [FragmentNames.News]: {
    fragment: /* GraphQL */ `
      #graphql
      fragment ${FragmentNames.News} on News {
        sys {
          id
        }
        title
        slug
        datePublished
        summary
        image {
          ...${FragmentNames.Image}
        }
      }
    `,
    dependencies: [FragmentNames.Image],
  },
};
