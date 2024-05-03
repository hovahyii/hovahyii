import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hovah Yii | Portfolio",
  applicationName: 'Hovah Yii | Portfolio',
  description: "Discover the portfolio of Hovah Yii, a results-driven student mentor and developer. With a proven track record in the .NET Framework and SQL, Hovah has delivered coding excellence across more than 7 web apps and 2 mobile apps. Explore his work, including the backend code for 3 successful business websites, and see how his tech-savvy approach can build your next project.",  
  keywords: "jehovah yii zui hon, Jehovah Yii Zui Hon, Jehovah Yii, hovahyii, Hovah Yii, Hovah, hovah yii, Yii, Hovah Yii Portfolio, Hovah Yii Projects, Hovah Yii Work, Hovah Yii blog, Hovah Yii Projects, Hovah Yii Work, mentor, milkteaplus, iem umpsa, Student Mentor, Software Developer, Freelance Developer, Web, engineering, iot, 3d modelling ",
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
    title: "Hovah Yii | Portfolio",
    description: "Discover the portfolio of Hovah Yii, a results-driven student mentor and developer. With a proven track record in the .NET Framework and SQL, Hovah has delivered coding excellence across more than 7 web apps and 2 mobile apps. Explore his work, including the backend code for 3 successful business websites, and see how his tech-savvy approach can build your next project.",  
    images: [
      {
        url: '/hovah.jpeg', // Must be an absolute URL
        width: 800,
        height: 600,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon/android-chrome-512x512.png',
    shortcut: '/icon/android-chrome-512x512.png',
    apple: '/icon/apple-touch-icon.png',
    other: {
      rel: '/icon/apple-touch-icon-precomposed',
      url: '/icon/apple-touch-icon.png',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hovah Yii | Portfolio",
    description: "Discover the portfolio of Hovah Yii, a results-driven student mentor and developer. With a proven track record in the .NET Framework and SQL, Hovah has delivered coding excellence across more than 7 web apps and 2 mobile apps. Explore his work, including the backend code for 3 successful business websites, and see how his tech-savvy approach can build your next project.",  
    creator: '@HovahYii',
    creatorId: '913234211418468352',
    images: ['/hovah.jpeg'], // Must be an absolute URL
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
