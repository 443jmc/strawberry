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

const pageCorrections: Record<string, Array<[string, string]>> = {
  '/about-james-christensen': [
    ['Why I became a Therapist', 'Why I became a therapist'],
    ['two days after graduation, we were on our way', 'two days after graduation. We were on our way'],
    ['the blessings of that love filtered down', 'the blessings of that love filter down'],
  ],
  '/communication': [
    ['Couples Therapy for Communication in', 'Couples Therapy for Communication Problems'],
  ],
  '/course-communication': [
    ['Communication <br>For Couples', 'Communication <br>for Couples'],
    ['Lesson 3<br>', 'Lesson 3:<br>'],
    ['Lesson 4<br>', 'Lesson 4:<br>'],
    ['Lesson 5<br>', 'Lesson 5:<br>'],
  ],
  '/disconnection': [
    ['Marriage Counseling for Roommate Syndrom', 'Marriage Counseling for Roommate Syndrome'],
  ],
  '/intensive-couples-therapy': [
    ['Your irst 50-minute session is free.', 'Your first 50-minute session is free.'],
  ],
  '/how-couples-therapy-works': [
    ['is good at at observation', 'is good at observation'],
  ],
};

const descriptionCorrections: Record<string, string> = {
  '/about-james-christensen': 'Meet James Christensen, LMFT, a direct, strength-based couples therapist serving Roseville, California and clients worldwide.',
  '/david-schnarch': 'Learn about Dr. David Schnarch, the creator of Crucible Therapy and a pioneering voice in differentiation-based couples therapy.',
  '/tapping': 'Learn Emotional Freedom Tapping exercises for regulating intense emotions and strengthening self-awareness.',
};

const titleCorrections: Record<string, string> = {
  '/read': 'Reading List | Relationship Books That Shaped My Work',
};

export function getPageTitle(page: ArchivedPage) {
  return titleCorrections[page.path] || page.title;
}

export function getPageDescription(page: ArchivedPage) {
  return descriptionCorrections[page.path] || page.description.replace(/^Meta Description:\s*/i, '');
}

export function getPolishedHtml(page: ArchivedPage) {
  let html = page.html;
  for (const [mistake, correction] of pageCorrections[page.path] || []) {
    html = html.replaceAll(mistake, correction);
  }

  return html
    .replace(/<h([1-6])>\s*(?:<br\s*\/?\s*>)?\s*<\/h\1>/gi, '')
    .replace(/<p>\s*<\/p>/gi, '');
}
