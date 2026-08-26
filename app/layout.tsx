import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://jamesmchristensen.com'),
  title: 'Couples Therapy in Roseville, CA | Roseville Couples Counseling',
  description: 'Couples therapy and marriage counseling in Roseville, CA for conflict, disconnection, infidelity, and communication problems. First session free.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Couples Therapy in Roseville, CA | Roseville Couples Counseling',
    description: 'Couples therapy and marriage counseling in Roseville, CA for conflict, disconnection, infidelity, and communication problems. First session free.',
    images: [{ url: 'https://static1.squarespace.com/static/64fb40924ddf256063824bc3/t/6977fc7504bf73679b502720/1769471093818/Screenshot+2026-01-26+at+3.44.35%E2%80%AFPM.png?format=1500w', alt: 'Couples Therapy in Roseville, CA' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Couples Therapy in Roseville, CA | Roseville Couples Counseling',
    description: 'Couples therapy and marriage counseling in Roseville, CA for conflict, disconnection, infidelity, and communication problems. First session free.',
    images: ['https://static1.squarespace.com/static/64fb40924ddf256063824bc3/t/6977fc7504bf73679b502720/1769471093818/Screenshot+2026-01-26+at+3.44.35%E2%80%AFPM.png?format=1500w'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
