import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import JsonLd from '@/components/JsonLd';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: 'IPTV Map — #1 Worldwide IPTV Service | 50,000+ 4K Channels & 200,000+ VOD',
    template: '%s | IPTV Map',
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'IPTV Map Engineering Team', url: siteConfig.domain }],
  creator: 'IPTV Map',
  publisher: 'IPTV Map',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.domain,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.domain,
    siteName: 'IPTV Map',
    title: 'IPTV Map — #1 Worldwide IPTV Service | 50,000+ 4K Channels & 200,000+ VOD',
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.domain}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'IPTV Map — 50,000+ Live Channels & 200,000+ VOD Movies 4K Subscription',
        type: 'image/jpeg',
      },
      {
        url: `${siteConfig.domain}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'IPTV Map Worldwide 4K Streaming Network Infrastructure',
        type: 'image/png',
      },
      {
        url: `${siteConfig.domain}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: 'IPTV Map Worldwide 4K Streaming Network Vector Banner',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPTV Map — #1 Worldwide IPTV Service | 50,000+ 4K Channels & 200,000+ VOD',
    description: siteConfig.description,
    images: [`${siteConfig.domain}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-48.png', type: 'image/png', sizes: '48x48' },
      { url: '/logo-icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    legalName: siteConfig.name,
    url: siteConfig.domain,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.domain}/logo.svg`,
      contentUrl: `${siteConfig.domain}/logo.svg`,
      width: 512,
      height: 512,
      caption: 'IPTV Map Official Brand Logo',
    },
    description: siteConfig.description,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: siteConfig.email,
      availableLanguage: ['English', 'Spanish'],
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.domain,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.domain}/logo.svg`,
        contentUrl: `${siteConfig.domain}/logo.svg`,
        width: 512,
        height: 512,
        caption: 'IPTV Map Official Brand Logo',
      },
    },
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://translate.googleapis.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://translate.googleapis.com" />
        <link rel="preconnect" href="https://translate-pa.googleapis.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://translate-pa.googleapis.com" />
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="bg-brand-bg text-brand-text min-h-screen flex flex-col antialiased selection:bg-brand-primary selection:text-brand-bg">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <LanguageSwitcher />
      </body>
    </html>
  );
}
