'use client';

export const dateConverter = (date: string) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

export const contentfulLoader = ({
  src,
  width,
  height,
  quality,
  fit,
  focus,
}: {
  src: string;
  width?: number;
  height?: number;
  quality?: number;
  fit?: string;
  focus?: string;
}) => {
  const url = new URL(src);
  url.searchParams.set('fm', 'avif');
  if (width) url.searchParams.set('w', width.toString());
  if (height) url.searchParams.set('h', height.toString());
  if (quality) url.searchParams.set('q', quality.toString());
  if (fit) url.searchParams.set('fit', fit);
  if (focus) url.searchParams.set('f', focus);
  return url.href;
};
