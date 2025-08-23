/* ================= ATOMIC COMPONENTS ================= */
export const IMAGE_FRAGMENT = /* GraphQL */ `
  #graphql
  fragment Image on Asset {
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
`;

/* ================= PAGES ================= */
export const HOMEPAGE_FRAGMENT = /* GraphQL */ `
  fragment Homepage on Homepage {
    entryTitle
    introText {
      json
    }
    slideshow {
      items {
        
      }
    }
    eventsSectionTitle
    activitiesSectionTitle
    socialSectionTitle
  }
`;
