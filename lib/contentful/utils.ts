import {fragments} from './fragments';
import {Fragment} from './types';

/**
 * Minifies a GraphQL query string by removing comments and normalizing whitespace
 * @param {T} string - The GraphQL query string to minify
 * @returns {T} The minified GraphQL query with the same type as the input
 * @template T - Type parameter to preserve the string literal type
 */
export const minifyGraphQLQuery = <T extends string>(string: T): T => {
  return string
    .replace(/"""[\s\S]*?"""/gm, ' ') // Remove multi-line comments wrapped in """
    .replace(/#[\w\s]*?(\n|\r|$)/gm, ' ') // Remove # and everything after it
    .replace(/[ \t\n\r]+/gm, ' ') // Remove 1 or more space, tab, or newline
    .trim() as T;
};

export const fragmentResolver = (fragment: Fragment) => {
  return `
  ${fragment.fragment}
  ${fragmentDependencyResolver(fragment)}`;
};

export const fragmentDependencyResolver = (fragment: Fragment) => {
  let fragmentDependencies = '';
  if (fragment.dependencies) {
    fragment.dependencies.map((fragmentName) => {
      const childFragment = fragments[fragmentName];
      fragmentDependencies += '\n' + childFragment.fragment;
      if (childFragment.dependencies) {
        fragmentDependencies += fragmentDependencyResolver(childFragment);
      }
    });
  }
  return fragmentDependencies;
};
