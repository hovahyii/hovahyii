import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hovahyii.vercel.app/"),
  title: "Meet Hovah Yii | Explore His Portfolio",
  referrer: "origin-when-cross-origin",
  applicationName: "Meet Hovah Yii | Explore His Portfolio",
  description: "Explore Hovah Yii's portfolio: a results-driven developer and mentor with expertise in .NET, SQL, web and mobile app development. Discover his role in creating over 7 web and 2 mobile apps, including backend solutions for successful businesses.",
  keywords: ["Jehovah Yii Zui Hon", "Hovah Yii", "Full Stack Developer", ".NET", "SQL", "Web Development", "Mobile App Development", "Backend Solutions", "Software Engineer", "Portfolio"],
  authors: [{ name: "Hovah Yii", url: "https://hovahyii.vercel.app/" }],
  creator: "Hovah Yii",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    url: "https://hovahyii.vercel.app/",
    siteName: "Hovah Yii",
    title: "Meet Hovah Yii | Explore His Portfolio",
    description: "Explore Hovah Yii's portfolio: a results-driven developer and mentor with expertise in .NET, SQL, web and mobile app development. Discover his role in creating over 7 web and 2 mobile apps, including backend solutions for successful businesses.",
    images: [
      {
        url: "https://hovahyii.vercel.app/hovah.png",
        width: 800,
        height: 600,
        alt: "Hovah Yii Avatar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon/android-chrome-512x512.png" },
      new URL("/icon/android-chrome-512x512.png", "https://hovahyii.vercel.app/"),
    ],
    shortcut: ["/icon/android-chrome-512x512.png"],
    apple: [
      { url: "/icon/apple-touch-icon" },
      { url: "/icon/apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Hovah Yii | Explore His Portfolio",
    description: "Explore Hovah Yii's portfolio: a results-driven developer and mentor with expertise in .NET, SQL, web and mobile app development. Discover his role in creating over 7 web and 2 mobile apps, including backend solutions for successful businesses.",
    creator: "@HovahYii",
    creatorId: "913234211418468352",
    images: {
      url: "https://hovahyii.vercel.app/icon/android-chrome-512x512.png",
      alt: "Hovah Yii Avatar",
    },
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
};