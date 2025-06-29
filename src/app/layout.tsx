import './globals.css';
import localFont from 'next/font/local';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { PERSONAL_INFO } from '@/constants/personal-data';
import { APP_CONFIG } from '@/utils/constants';

const neueMachina = localFont({
  src: '../../public/NeueMachina-Light.otf',
  variable: '--font-neue-machina',
  display: 'swap',
});

const abcDiatype = localFont({
  src: '../../public/abc-diatype-light.otf',
  variable: '--font-abc-diatype',
  display: 'swap',
});

const geistMono = localFont({
  src: [
    {
      path: '../../public/GeistMono-Light.otf',
      weight: '300',
    },
    {
      path: '../../public/GeistMono-Regular.otf',
      weight: '400',
    }
  ],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata = {
  title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`,
  description: PERSONAL_INFO.bio,
  keywords: 'Computer Engineering, Software Development, Portfolio, Student, React, TypeScript, Next.js, Web3, Blockchain',
  authors: [{ name: PERSONAL_INFO.name }],
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
    <html lang="en" className="scroll-smooth">
      <body className={`${neueMachina.variable} ${abcDiatype.variable} ${geistMono.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
} 