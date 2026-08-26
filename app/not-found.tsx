import { SiteFooter, SiteHeader } from './site-shell';

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="not-found-page">
        <p className="eyebrow">404</p>
        <h1>That page could not be found.</h1>
        <p>The address may have changed, or the link may be out of date.</p>
        <a className="outline-button" href="/">Return home</a>
      </main>
      <SiteFooter />
    </>
  );
}
