import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import { Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'PlayPilot | Pedagogical Intelligence for Early Learning',
  description:
    'PlayPilot is a pedagogical intelligence platform connecting educators, families, supervisors, and communities through meaningful documentation and shared insight.',
  keywords: ['early childhood', 'educator', 'documentation', 'pedagogy', 'Alberta', 'Flight', 'curriculum framework', 'observation', 'NNN', 'EYLF', 'Te Whariki', 'EYFS', 'Head Start', 'early childhood documentation', 'pedagogical intelligence'],
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'PlayPilot',
    locale: 'en_US',
    title: 'PlayPilot | Pedagogical Intelligence for Early Learning',
    description:
      'PlayPilot is a pedagogical intelligence platform connecting educators, families, supervisors, and communities through meaningful documentation and shared insight.',
    url: 'https://playpilotlearning.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PlayPilot | Pedagogical Intelligence for Early Learning',
    description:
      'PlayPilot is a pedagogical intelligence platform connecting educators, families, supervisors, and communities through meaningful documentation and shared insight.',
  },
  manifest: '/manifest.json',
  other: {
    'theme-color': '#1B2559',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable} ${geistMono.variable} font-sans antialiased`}>
        <Navbar />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'PlayPilot',
              url: 'https://playpilotlearning.com',
              logo: 'https://playpilotlearning.com/logo-plane.png',
              description: 'Pedagogical intelligence platform for early childhood education.',
              email: 'hello@playpilotlearning.com',
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  );
}
