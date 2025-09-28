import {fragmentResolver, minifyGraphQLQuery} from './utils.server';
import {ALL_NEWS_QUERY, HOMEPAGE_QUERY, NEWS_PAGE} from './queries';
import {HomepageEntry, NewsEntry} from './types';

const apiCall = async (preview = false, query: string, variables?: any) => {
  const url = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`;
  const accessToken =
    preview && process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
      ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
      : process.env.CONTENTFUL_ACCESS_TOKEN;
  const headers = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: minifyGraphQLQuery(query),
      variables,
    }),
  };

  try {
    const response = await fetch(url, headers);
    const {errors, data} = await response.json();
    if (errors?.length) {
      console.error(errors.map((err: any) => err.message).join(', '));
    }
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const apiClient = {
  getHomepage: async (preview = false): Promise<HomepageEntry | null> => {
    const result = await apiCall(preview, fragmentResolver(HOMEPAGE_QUERY));
    return result?.homepageCollection?.items?.[0] ?? null;
  },
  getAllNews: async (preview = false): Promise<NewsEntry[] | null> => {
    const result = await apiCall(preview, fragmentResolver(ALL_NEWS_QUERY));
    console.log(result);
    return result?.newsCollection?.items ?? null;
  },
  getNewsPage: async (
    slug: string,
    preview = false,
  ): Promise<NewsEntry | null> => {
    const result = await apiCall(preview, fragmentResolver(NEWS_PAGE), {
      slug,
    });
    return result?.newsCollection?.items?.[0] ?? null;
  },
};
