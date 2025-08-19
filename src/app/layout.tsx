import './globals.css';
import React from 'react';
import localFont from 'next/font/local';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { StaticHeader } from '@/components/StaticContent';
import StructuredData from '@/components/StructuredData';
import SimpleLanguageToggle from '@/components/ui/SimpleLanguageToggle';
import { PERSONAL_INFO } from '@/constants/personal-data';
import { APP_CONFIG } from '@/utils/constants';

const neueMachina = localFont({
  src: '../../public/fonts/NeueMachina-Light.otf',
  variable: '--font-neue-machina',
  display: 'swap',
  preload: true,
});

const abcDiatype = localFont({
  src: '../../public/fonts/abc-diatype-light.otf',
  variable: '--font-abc-diatype',
  display: 'swap',
  preload: true,
});

const geistMono = localFont({
  src: [
    {
      path: '../../public/fonts/GeistMono-Light.otf',
      weight: '300',
    },
    {
      path: '../../public/fonts/GeistMono-Regular.otf',
      weight: '400',
    }
  ],
  variable: '--font-geist-mono',
  display: 'swap',
  preload: true,
});

export const metadata = {
  title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title} | React & Next.js Developer`,
  description: 'Gökay Şahin - Frontend Developer specializing in React, Next.js, TypeScript, and Web3 technologies. Creating modern, responsive web applications with exceptional user experiences. Available for projects in İzmir, Turkey.',
  keywords: 'Gökay Şahin, Frontend Developer, React Developer, Next.js Developer, TypeScript Developer, Web3 Developer, JavaScript Developer, Web Development İzmir, Frontend Developer Turkey, React İzmir, Web Tasarım, Site Geliştirme, Modern Web Uygulamaları, Responsive Web Design',
  authors: [{ name: PERSONAL_INFO.name }],
  creator: PERSONAL_INFO.name,
  publisher: PERSONAL_INFO.name,
  category: 'Web Development',
  metadataBase: new URL('https://gokaysahin.com'),
  alternates: {
    canonical: 'https://gokaysahin.com',
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
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://gokaysahin.com',
    title: `${PERSONAL_INFO.name} - Frontend Developer | React & Next.js Specialist`,
    description: 'Frontend Developer specializing in React, Next.js, TypeScript, and Web3 technologies. Creating modern, responsive web applications with exceptional user experiences.',
    siteName: `${PERSONAL_INFO.name} - Frontend Developer`,
    images: [
      {
        url: '/logos/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: `${PERSONAL_INFO.name} - Frontend Developer`,
      },
      {
        url: '/logos/android-chrome-192x192.png',
        width: 192,
        height: 192,
        alt: `${PERSONAL_INFO.name} - Frontend Developer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSONAL_INFO.name} - Frontend Developer | React & Next.js Specialist`,
    description: 'Frontend Developer specializing in React, Next.js, TypeScript, and Web3 technologies. Creating modern web applications.',
    images: ['/logos/android-chrome-512x512.png'],
    creator: '@katex35', // Twitter handle if available
  },
  verification: {
    google: 'your-google-site-verification-code', // Google Search Console verification
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: APP_CONFIG.THEME_COLOR,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logos/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/logos/favicon-32x32.png" sizes="32x32" />
        <StructuredData />
      </head>
      <body className={`${neueMachina.variable} ${abcDiatype.variable} ${geistMono.variable} font-sans antialiased`}>
        <SimpleLanguageToggle />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

 