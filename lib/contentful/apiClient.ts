import {minifyGraphQLQuery} from '../utils/api/minifyGraphQLQuery';
import {HOMEPAGE_QUERY} from './queries/homepage';

export const apiClient = () => {
  const apiCall = async (preview = false, query: string) => {
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
      body: JSON.stringify({query: minifyGraphQLQuery(query)}),
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

  const getHomepage = async (preview = false) => {
    const {homepageCollection} = await apiCall(preview, HOMEPAGE_QUERY);
    return homepageCollection?.items?.[0] ?? null;
  };

  return {
    getHomepage,
  };
};
