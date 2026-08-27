import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ContactForm from '../contact-form';
import Home from '../page';
import { archivedPages, getArchivedPage, getPageDescription, getPageTitle, getPolishedHtml, type ArchivedPage } from '../site-data';
import { SiteFooter, SiteHeader } from '../site-shell';

type RouteProps = { params: Promise<{ slug: string[] }> };

function pathFromSlug(slug: string[]) {
  return `/${slug.join('/')}`;
}

const collections: Record<string, { eyebrow: string; heading: string; introduction: string }> = {
  '/blog': {
    eyebrow: 'Relationship resources',
    heading: 'Strength-Based Marriage Blog',
    introduction: 'Practical writing on communication, intimacy, differentiation, infidelity, and personal growth.',
  },
  '/podcast': {
    eyebrow: 'Listen and learn',
    heading: 'Balance Your Brain Podcast',
    introduction: 'Conversations about life, love, relationships, and becoming a more solid person.',
  },
  '/book-summaries': {
    eyebrow: 'Reading resources',
    heading: 'Relationship Book Summaries',
    introduction: 'Clear summaries of influential books on marriage, couples therapy, psychology, and personal development.',
  },
};

function CollectionPage({ path }: { path: string }) {
  const collection = collections[path];
  const entries = archivedPages
    .filter((page) => page.path.startsWith(`${path}/`))
    .sort((a, b) => (b.lastModified || '').localeCompare(a.lastModified || ''));

  return (
    <main className="collection-page">
      <header className="collection-intro">
        <p className="eyebrow">{collection.eyebrow}</p>
        <h1>{collection.heading}</h1>
        <p>{collection.introduction}</p>
      </header>
      <div className="collection-grid">
        {entries.map((entry) => (
          <article className="collection-card" key={entry.path}>
            {entry.image && <img src={entry.image.replace(/^http:/, 'https:')} alt={entry.imageAlt || ''} loading="lazy" />}
            <div>
              <p className="card-meta">{entry.lastModified ? new Date(`${entry.lastModified}T12:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : collection.eyebrow}</p>
              <h2><a href={entry.path}>{entry.title}</a></h2>
              {entry.description && <p>{getPageDescription(entry)}</p>}
              <a className="text-link" href={entry.path}>Read more <span aria-hidden="true">→</span></a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

function ContactPage() {
  return (
    <main className="special-page contact-page">
      <div className="special-page-intro">
        <p className="eyebrow">Contact</p>
        <h1>Let’s talk about your relationship.</h1>
        <p>I usually respond within one business day. Your first 50-minute session is free.</p>
        <p><strong>Roseville Couples Counseling</strong><br />300 Harding Blvd, Suite 108<br />Roseville, CA 95678</p>
        <p><a href="tel:9162928920">916-292-8920</a></p>
        <a className="solid-button" href="https://james.clientsecure.me/request/service">Schedule a free first session</a>
      </div>
      <div className="form-card"><ContactForm /></div>
    </main>
  );
}

function SimpleResourcePage({ page, kind }: { page: ArchivedPage; kind: 'videos' | 'newsletter' }) {
  const isVideos = kind === 'videos';
  return (
    <main className="special-page resource-page">
      <p className="eyebrow">Resources</p>
      <h1>{isVideos ? 'Relationship Videos' : 'Relationship Newsletter'}</h1>
      <p>{getPageDescription(page)}</p>
      <div className="resource-actions">
        <a className="solid-button" href={isVideos ? '/podcast' : '/blog'}>{isVideos ? 'Explore the podcast' : 'Read the latest articles'}</a>
        <a className="outline-button" href="/contact">Contact James</a>
      </div>
    </main>
  );
}

const readingList = [
  {
    title: 'Already Free', author: 'Bruce Tift',
    image: 'https://images.squarespace-cdn.com/content/v1/64fb40924ddf256063824bc3/99ca2d61-31cb-4c7c-acba-02325a19cea3/81k4qFSv3VL._AC_UY436_QL65_.jpg',
    href: '/book-summaries/summary-of-already-free-by-bruce-tift',
    lessons: ['Feel my feelings without acting on them', 'Notice where emotions live in my body', 'Understand resentment in my marriage'],
  },
  {
    title: 'Passionate Marriage', author: 'David Schnarch',
    image: 'https://images.squarespace-cdn.com/content/v1/64fb40924ddf256063824bc3/f5600713-cd77-4436-9974-1f2ab5da4b8f/51ig7ugXYeL._SY522_.jpg',
    href: '/book-summaries/book-summary-passionate-marriage-by-david-schnarch',
    lessons: ['Care more deeply about my wife', 'Understand sexual problems in marriage', 'See how I contributed to our problems'],
  },
  {
    title: 'The Courage to Be Disliked', author: 'Ichiro Kishimi',
    image: 'https://images.squarespace-cdn.com/content/v1/64fb40924ddf256063824bc3/941fbba8-09e5-4248-8868-17a72b826356/71TZnQSik3L._AC_UY436_QL65_.jpg',
    href: '/book-summaries/book-summary-the-courage-to-be-disliked-and-the-courage-to-be-happy-by-ichiro-kishimi',
    lessons: ['Understand anger', 'Take responsibility for my feelings and behavior', 'Build genuine self-respect'],
  },
];

function ReadingPage() {
  return (
    <main className="collection-page reading-page">
      <header className="collection-intro">
        <p className="eyebrow">Books that shaped my work</p>
        <h1>Reading List</h1>
        <p>Three books that changed the way I understand relationships, responsibility, and personal growth.</p>
      </header>
      <div className="reading-grid">
        {readingList.map((book) => (
          <article className="reading-card" key={book.title}>
            <img src={book.image} alt={`${book.title} by ${book.author} book cover`} loading="lazy" />
            <div>
              <p className="card-meta">{book.author}</p>
              <h2>{book.title}</h2>
              <p>Helped me:</p>
              <ul>{book.lessons.map((lesson) => <li key={lesson}>{lesson}</li>)}</ul>
              <a className="text-link" href={book.href}>Read the summary <span aria-hidden="true">→</span></a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return archivedPages.map((page) => ({ slug: page.path.slice(1).split('/') }));
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const path = pathFromSlug(slug);
  const page = getArchivedPage(path);
  if (!page) return {};

  const image = page.image ? page.image.replace(/^http:/, 'https:') : undefined;
  const isArticle = path.startsWith('/blog/') || path.startsWith('/book-summaries/');
  const description = getPageDescription(page);
  const title = getPageTitle(page);

  return {
    title,
    description,
    alternates: { canonical: path },
    robots: path === '/404' ? { index: false, follow: false } : undefined,
    openGraph: {
      type: isArticle ? 'article' : 'website',
      url: path,
      title,
      description,
      images: image ? [{ url: image, alt: page.imageAlt || title }] : [],
    },
    twitter: {
      card: image ? 'summary_large_image' : 'summary',
      title,
      description,
      images: image ? [image] : [],
    },
  };
}

export default async function ArchivedRoute({ params }: RouteProps) {
  const { slug } = await params;
  const path = pathFromSlug(slug);
  const page = getArchivedPage(path);
  if (!page) notFound();

  if (path === '/home') return <Home />;

  let content: React.ReactNode;
  if (collections[path]) {
    content = <CollectionPage path={path} />;
  } else if (path === '/read') {
    content = <ReadingPage />;
  } else if (path === '/contact') {
    content = <ContactPage />;
  } else if (path === '/videos' || path === '/newsletter') {
    content = <SimpleResourcePage page={page} kind={path.slice(1) as 'videos' | 'newsletter'} />;
  } else {
    const isArticle = path.startsWith('/blog/') || path.startsWith('/podcast/') || path.startsWith('/book-summaries/');
    const hasMultipleImages = (page.html.match(/<img\b/gi) || []).length > 1;
    content = (
      <main className={`archive-page ${isArticle ? 'article-page' : 'standard-page'}${hasMultipleImages ? ' multi-image-page' : ''}`}>
        <div className="archive-content" dangerouslySetInnerHTML={{ __html: getPolishedHtml(page) }} />
      </main>
    );
  }

  return (
    <>
      <SiteHeader />
      {content}
      <SiteFooter />
    </>
  );
}
