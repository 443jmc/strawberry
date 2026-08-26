import ContactForm from './contact-form';

const serviceLinks = [
  ['Intensive Couples Therapy', '/intensive-couples-therapy'], ['Private Marriage Retreats', '/private-couples-retreats'],
  ['Codependency', '/codependency'], ['Communication', '/communication'], ['Disconnection', '/disconnection'],
  ['Infidelity', '/infidelity'], ['Dead Bedroom', '/intimacy-and-desire'], ['Narcissism', '/narcissism'],
  ['Relationship Anxiety', '/relationship-anxiety'], ['Threats of Divorce', '/threats-of-divorce'],
];
const resourceLinks = [
  ['Blog', '/blog'], ['FAQ', '/faq'], ['Podcast', '/podcast'], ['Videos', '/videos'], ['Contact', '/contact'],
  ['Reading List', '/read'], ['Book Summaries', '/book-summaries'], ['About Crucible Therapy', '/crucible'],
  ['About James Christensen', '/about-james-christensen'], ['How Couples Therapy Works', '/how-couples-therapy-works'],
];
const learnMore = [
  ['Communication & Conflict', '/communication', 'Every conversation turns into a battle. You’re not fighting about money or the kids—you’re fighting because something deeper is broken underneath.'],
  ['Sex & Intimacy', '/intimacy-and-desire', 'One of you wants more. The other feels pressured, guilty, or numb. This isn’t just a libido problem—it reflects what is happening between you emotionally.'],
  ['Relationship Anxiety', '/relationship-anxiety', 'Your worry about the relationship has become the relationship. You’re scanning for signs and seeking reassurance that never holds.'],
  ['Threats of Divorce', '/threats-of-divorce', 'Every fight ends the same way: someone says “maybe we should just get divorced.” It becomes a weapon, a panic button, or a cry for help.'],
  ['Roommate Syndrome', '/disconnection', 'You live in the same house, sleep in the same bed, and feel completely alone. You’re not in crisis—you’re just disconnected.'],
  ['Infidelity & Trust', '/infidelity', 'Whether you discovered the affair or confessed it, you’re cycling between rage, grief, and numbness—wondering if your marriage can survive.'],
  ['Narcissism', '/narcissism', 'You’ve learned to monitor your tone, your words, and even your facial expressions. The reality is more nuanced and hopeful than the internet suggests.'],
  ['Codependency', '/codependency', 'You’ve lost track of where you end and your partner begins. Understanding the difference between love and over-functioning is where change starts.'],
];

function SourceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href}>{children}</a>;
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top">Roseville Couples Counseling</a>
        <nav aria-label="Primary navigation">
          <a href="#top">Home</a>
          <details className="nav-menu"><summary>Services <span aria-hidden="true">⌄</span></summary><div className="nav-panel">{serviceLinks.map(([label, href]) => <SourceLink key={href} href={href}>{label}</SourceLink>)}</div></details>
          <details className="nav-menu"><summary>Resources <span aria-hidden="true">⌄</span></summary><div className="nav-panel nav-panel-wide">{resourceLinks.map(([label, href]) => <SourceLink key={href} href={href}>{label}</SourceLink>)}</div></details>
        </nav>
        <a className="header-cta" href="https://james.clientsecure.me/request/service">Get Started</a>
      </header>

      <main id="top">
        <section className="hero content-grid">
          <div className="hero-copy">
            <h1><span>Couples Therapy</span><small>and Marriage Counseling</small><span>in Roseville, CA</span></h1>
            <p className="topics"><strong>Communication</strong> <b>•</b> <strong>Infidelity</strong> <b>•</b> <strong>Disconnection</strong></p>
            <p className="therapist"><strong>James Christensen LMFT</strong><br /><a href="tel:9162928920">916-292-8920</a></p>
            <div className="session-card"><strong>Your First Session is Free</strong><span>Additional sessions cost $300.</span><span>I don’t take insurance.</span><a href="https://james.clientsecure.me/request/service">Click Here to Schedule</a></div>
          </div>
          <figure className="hero-photo"><img src="https://images.squarespace-cdn.com/content/v1/64fb40924ddf256063824bc3/09bdf517-a73c-4336-a988-1e9419976d62/K9.jpg?format=1000w" alt="James Christensen offers Couples Therapy in Roseville, CA" /></figure>
        </section>

        <section className="story content-grid">
          <figure className="story-photo"><img src="https://images.squarespace-cdn.com/content/v1/64fb40924ddf256063824bc3/3d485189-f366-485e-b729-96252b4c45ef/K+Cadet.jpg?format=1000w" alt="James and Molly Christensen early in their marriage" /></figure>
          <div className="story-copy">
            <h2>Our Story</h2>
            <p><strong>Molly and I got married</strong> before I started pilot training in 2001. Military life was hard on our marriage, and we soon started to drift apart.</p>
            <p><strong>We wanted to provide a loving home</strong> for our children, but we didn’t know how. All we felt was anger, resentment, and hurt feelings.</p>
            <p><strong>We finally started therapy</strong> after my first deployment, but it didn’t help much. We worked with five therapists over five years, but nothing changed.</p>
            <p><strong>Our sixth therapist saved our marriage.</strong> Five sessions with her changed our marriage more than five years with our other therapists.</p>
            <p><strong>Our new therapist used an approach called Crucible Therapy.</strong> She was blunt and direct, and she helped us deal with the real problems in our marriage.</p>
            <p><strong>I decided to become a Crucible Therapist</strong> to help couples the way our therapist helped us.</p>
          </div>
        </section>

        <section className="approach content-grid">
          <div className="approach-copy">
            <h2><span>A Different Kind</span><small>of Marriage Counseling</small></h2>
            <p><strong>Molly and I have been married for 25 years.</strong> We’ve raised four children, survived infidelity, and have grown to love and appreciate each other more than we ever thought was possible.</p>
            <p><strong>I do strength-based therapy.</strong> I won’t validate your victimhood, but I will help you feel more powerful in your relationship.</p>
            <p><strong>I’m blunt and direct.</strong> You’ll never wonder what I really think.</p>
            <p><strong>I’ve worked with over 400 couples.</strong> It takes more than a license and a degree to become a good couples therapist.</p>
            <p><strong>I have years of experience</strong> and hundreds of hours of post-graduate training.</p>
            <p><strong>I offer two-hour and three-hour intensive sessions.</strong></p>
            <p><strong>If you don’t live in California,</strong> I offer online relationship coaching to clients all over the world.</p>
            <p><strong>Most couples see meaningful progress</strong> after 5–10 sessions. Complex cases take longer.</p>
          </div>
          <figure className="approach-photo"><img src="https://images.squarespace-cdn.com/content/v1/64fb40924ddf256063824bc3/ae169684-bd3a-4660-955f-094f73812158/tree+1.jpg?format=1000w" alt="James and Molly smiling together beneath a tree" /></figure>
        </section>

        <section className="contact-band content-grid">
          <div className="contact-intro"><div className="session-card"><strong>Your First Session is Free</strong><span>Additional sessions cost $300.</span><span>I don’t take insurance.</span><a href="https://james.clientsecure.me/request/service">Click Here to Schedule</a></div></div>
          <ContactForm />
        </section>

        <section className="learn-section">
          <h2>Learn More</h2>
          <div className="learn-list">{learnMore.map(([title, href, description]) => <article key={href}><h3><SourceLink href={href}>{title}</SourceLink></h3><p>{description}</p><SourceLink href={href}>Read more <span aria-hidden="true">→</span></SourceLink></article>)}</div>
        </section>
      </main>

      <footer>
        <p><strong>Roseville Couples Counseling</strong><br />300 Harding Blvd, Suite 108<br />Roseville, CA 95678<br /><a href="tel:9162928920">916-292-8920</a><br />James Christensen LMFT #142990</p>
        <a className="footer-cta" href="https://james.clientsecure.me/request/service">Schedule a free first session</a>
      </footer>
    </>
  );
}
