import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import type { Viewport } from 'next'
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://hovahyii.vercel.app/'),
  title: "Meet Hovah Yii | Explore His Portfolio",
  applicationName: 'Meet Hovah Yii | Explore His Portfolio',
  description: "Explore Hovah Yii's portfolio: a results-driven developer and mentor with expertise in .NET and SQL. Discover his role in creating over 7 web and 2 mobile apps, including backend solutions for successful businesses.",  
  keywords: ['jehovah yii zui hon', 'Jehovah Yii Zui Hon', 'Jehovah Yii', 'hovahyii', 'Hovah Yii', 'Hovah', 'hovah yii', 'Yii'],
  authors: [{ name: 'Hovah Yii', url: 'https://hovahyii.vercel.app/' }],
  creator: 'Hovah Yii',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    url: 'https://hovahyii.vercel.app/',
    siteName: 'Hovah Yii',
    title: "Meet Hovah Yii | Explore His Portfolio",
    description: "Explore Hovah Yii's portfolio: a results-driven developer and mentor with expertise in .NET and SQL. Discover his role in creating over 7 web and 2 mobile apps, including backend solutions for successful businesses.",  
    images: [
      {
        url: 'https://hovahyii.vercel.app/hovah.jpeg', // Must be an absolute URL
        width: 800,
        height: 600,
        alt: 'Hovah Yii Avatar'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon/android-chrome-512x512.png' },
      new URL('/icon/android-chrome-512x512.png', 'https://hovahyii.vercel.app/'),
    ],
    shortcut: ['/icon/android-chrome-512x512.png'],
    apple: [
      { url: '/icon/apple-touch-icon' },
      { url: '/icon/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/apple-touch-icon.png',
      },
    ],
  },
  twitter: {
    card: 'app',
    title: "Meet Hovah Yii | Explore His Portfolio",
    description: "Explore Hovah Yii's portfolio: a results-driven developer and mentor with expertise in .NET and SQL. Discover his role in creating over 7 web and 2 mobile apps, including backend solutions for successful businesses.",  
    creator: '@HovahYii',
    creatorId: '913234211418468352',
    images: {
      url: 'https://hovahyii.vercel.app/icon/android-chrome-512x512.png',
      alt: 'Hovah Yii Avatar',
    },
    app: {
      name: 'twitter_app',
      id: {
        iphone: 'twitter_app://iphone',
        ipad: 'twitter_app://ipad',
        googleplay: 'twitter_app://googleplay',
      },
      url: {
        iphone: 'https://iphone_url',
        ipad: 'https://ipad_url',
      },
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />

      </body>
    </html>
  );
}
