import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://strawberry.jamesmoroni.workers.dev'),
  title: 'Couples Therapy in Roseville, CA | Roseville Couples Counseling',
  description: 'Direct, strength-based couples therapy and marriage counseling with James Christensen, LMFT in Roseville, California.',
  openGraph: {
    title: 'Couples Therapy in Roseville, CA | Roseville Couples Counseling',
    description: 'Direct, strength-based couples therapy and marriage counseling with James Christensen, LMFT.',
    images: [{ url: 'https://strawberry.jamesmoroni.workers.dev/og.png', width: 1200, height: 630, alt: 'Couples Therapy in Roseville, CA' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Couples Therapy in Roseville, CA | Roseville Couples Counseling',
    description: 'Direct, strength-based couples therapy and marriage counseling with James Christensen, LMFT.',
    images: ['https://strawberry.jamesmoroni.workers.dev/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
