import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { archivedPages, getArchivedPage } from '../site-data';
import { SiteFooter, SiteHeader } from '../site-shell';

type RouteProps = { params: Promise<{ slug: string[] }> };

function pathFromSlug(slug: string[]) {
  return `/${slug.join('/')}`;
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

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: path },
    robots: path === '/404' ? { index: false, follow: false } : undefined,
    openGraph: {
      type: isArticle ? 'article' : 'website',
      url: path,
      title: page.title,
      description: page.description,
      images: image ? [{ url: image, alt: page.imageAlt || page.title }] : [],
    },
    twitter: {
      card: image ? 'summary_large_image' : 'summary',
      title: page.title,
      description: page.description,
      images: image ? [image] : [],
    },
  };
}

export default async function ArchivedRoute({ params }: RouteProps) {
  const { slug } = await params;
  const path = pathFromSlug(slug);
  const page = getArchivedPage(path);
  if (!page) notFound();

  return (
    <>
      <SiteHeader />
      <main className="archive-page">
        <div className="archive-content" dangerouslySetInnerHTML={{ __html: page.html }} />
      </main>
      <SiteFooter />
    </>
  );
}

