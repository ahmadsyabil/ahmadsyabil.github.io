import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { site } from '@/lib/data';
import { ThemeProvider, themeInitScript } from '@/components/ThemeProvider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description:
    'Computer Science graduate and software engineer in Malaysia. Full-stack web and mobile development, machine learning and data work. 38 weeks of industry internship experience.',
  keywords: [
    'Ahmad Syabil',
    'Software Engineer Malaysia',
    'Next.js Developer',
    'Machine Learning',
    'Data Analyst',
    'Full-Stack Developer',
    'Fresh Graduate Portfolio',
  ],
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description:
      'Full-stack web and mobile development, machine learning and data work. Based in Gombak, Selangor.',
    images: [
      {
        // Dedicated 1200x630 landscape crop — the portrait hero image gets
        // badly letterboxed in LinkedIn and X link previews.
        url: `${site.url}/og.jpg`,
        width: 1200,
        height: 630,
        alt: `${site.fullName} — ${site.role}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.role}`,
    description: 'Software Engineer & AI/Data Enthusiast based in Malaysia.',
    images: [`${site.url}/og.jpg`],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafbfd' },
    { media: '(prefers-color-scheme: dark)', color: '#080a0f' },
  ],
  width: 'device-width',
  initialScale: 1,
};

/** Machine-readable identity for search engines. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.fullName,
  alternateName: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  url: site.url,
  image: `${site.url}/profile.jpg`,
  address: { '@type': 'PostalAddress', addressLocality: 'Gombak', addressRegion: 'Selangor', addressCountry: 'MY' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universiti Teknologi MARA' },
  sameAs: [site.socials.github, site.socials.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        {/* Runs before first paint so dark mode never flashes white. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
