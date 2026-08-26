const services = [
  ['Intensive Couples Therapy', '/intensive-couples-therapy'],
  ['Private Couples Retreats', '/private-couples-retreats'],
  ['Codependency', '/codependency'],
  ['Communication', '/communication'],
  ['Disconnection', '/disconnection'],
  ['Infidelity', '/infidelity'],
  ['Intimacy & Desire', '/intimacy-and-desire'],
  ['Narcissism', '/narcissism'],
  ['Relationship Anxiety', '/relationship-anxiety'],
  ['Threats of Divorce', '/threats-of-divorce'],
];

const resources = [
  ['Blog', '/blog'],
  ['FAQ', '/faq'],
  ['Podcast', '/podcast'],
  ['Videos', '/videos'],
  ['Contact', '/contact'],
  ['Reading List', '/read'],
  ['Book Summaries', '/book-summaries'],
  ['About Crucible Therapy', '/crucible'],
  ['About James Christensen', '/about-james-christensen'],
  ['How Couples Therapy Works', '/how-couples-therapy-works'],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/">Roseville Couples Counseling</a>
      <nav aria-label="Primary navigation">
        <a href="/">Home</a>
        <details className="nav-menu">
          <summary>Services <span aria-hidden="true">⌄</span></summary>
          <div className="nav-panel">
            {services.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </div>
        </details>
        <details className="nav-menu">
          <summary>Resources <span aria-hidden="true">⌄</span></summary>
          <div className="nav-panel nav-panel-wide">
            {resources.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </div>
        </details>
      </nav>
      <a className="header-cta" href="https://james.clientsecure.me/request/service">Get Started</a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <p><strong>Roseville Couples Counseling</strong><br />300 Harding Blvd, Suite 108<br />Roseville, CA 95678<br /><a href="tel:9162928920">916-292-8920</a><br />James Christensen LMFT #142990</p>
      <a className="footer-cta" href="https://james.clientsecure.me/request/service">Schedule a free first session</a>
    </footer>
  );
}

