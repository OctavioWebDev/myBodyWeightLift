import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: {
    default: 'Chi-Rho Power & Strength',
    template: '%s | Chi-Rho Power & Strength',
  },
  description: 'Prepare, Commit, Respond - A blog on my thoughts and learnings on strength training and living a purposeful life.',
  keywords: ['strength training', 'fitness', 'bodyweight exercises', 'workout plans', 'health and wellness'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Chi-Rho Power & Strength',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yourdomain.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: 'Chi-Rho Power & Strength',
    description: 'Prepare, Commit, Respond - A blog on my thoughts and learnings on strength training and living a purposeful life.',
    url: 'https://yourdomain.com',
    siteName: 'Chi-Rho Power & Strength',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chi-Rho Power & Strength',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chi-Rho Power & Strength',
    description: 'Prepare, Commit, Respond - Strength training and purposeful living',
    images: ['https://yourdomain.com/twitter-image.jpg'],
    creator: '@yourtwitterhandle',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
