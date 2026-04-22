import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Geist_Mono } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SplashScreen } from '@/components/layout/SplashScreen';
import { NavPlane } from '@/components/layout/NavPlane';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
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
  keywords: ['early childhood', 'educator', 'documentation', 'pedagogy', 'Alberta', 'Flight', 'curriculum framework', 'observation', 'NNN'],
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <SplashScreen />
        <NavPlane />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
