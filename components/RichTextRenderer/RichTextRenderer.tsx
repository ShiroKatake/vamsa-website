import {
  ContentfulEntryGeneric,
  ContentfulRichTextField,
} from '@/lib/contentful/type';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import type {Options} from '@contentful/rich-text-react-renderer';
import {BLOCKS, INLINES} from '@contentful/rich-text-types';
import Link from 'next/link';
import Image from 'next/image';

type LinksMap = {
  assets: Map<string, ContentfulEntryGeneric>;
  entries: Map<string, ContentfulEntryGeneric>;
};

export const mapEntryLinks = (
  links: ContentfulRichTextField['links'],
): LinksMap => {
  const assetMap = new Map();
  const entryMap = new Map();

  if (links?.assets?.block) {
    links.assets.block.forEach((asset) => {
      if (asset?.sys) {
        assetMap.set(asset.sys.id, asset);
      }
    });
  }

  if (links?.entries?.block) {
    links.entries.block.forEach((entry) => {
      if (entry?.sys) {
        entryMap.set(entry.sys.id, entry);
      }
    });
  }

  return {
    assets: assetMap,
    entries: entryMap,
  };
};

export const renderOptions = (linksMap?: LinksMap, customOptions?: Options) => {
  const defaultOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const asset = linksMap?.assets?.get(node?.data?.target?.sys?.id);

        if (!asset?.contentType?.includes('image')) return null;

        return (
          <Image
            src={asset.url}
            width={asset.width}
            height={asset.height}
            alt={asset.description || asset.title}
          />
        );
      },
      [INLINES.HYPERLINK]: (node: any, children: any) => {
        return (
          <Link href={node.data.uri} target="_self">
            {children}
          </Link>
        );
      },
    },
  };

  return {
    ...defaultOptions,
    ...(customOptions ?? {}),
    renderNode: {
      ...defaultOptions.renderNode,
      ...customOptions?.renderNode,
    },
  };
};

export const RichTextRenderer = ({
  richTextField,
  customOptions,
}: {
  richTextField: ContentfulRichTextField;
  customOptions?: Options;
}) => {
  if (!richTextField?.json) return null;

  const options = renderOptions(
    mapEntryLinks(richTextField?.links),
    customOptions,
  );
  return <>{documentToReactComponents(richTextField.json, options)}</>;
};
