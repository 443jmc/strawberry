import content from './site-content.json';

export type ArchivedPage = {
  path: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  published: string;
  lastModified: string | null;
  html: string;
};

export const archivedPages = content.pages as ArchivedPage[];

const pageByPath = new Map(archivedPages.map((page) => [page.path, page]));

export function getArchivedPage(path: string) {
  return pageByPath.get(path);
}

