import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import SeoSchema from "./components/SeoSchema";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.DOMAIN_URL}`),
  title: {
    default: "Algorize — Creative Digital Agency",
    template: "%s | Algorize",
  },
  description:
    "Algorize is a creative digital agency focused on modern web design, animation, and high-performance user experiences.",
  applicationName: "Algorize",
  keywords: [
    "creative agency",
    "web design",
    "ui ux design",
    "web animation",
    "next.js agency",
  ],
  authors: [{ name: "Algorize Agency" }],
  creator: "Algorize Agency",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${process.env.DOMAIN_URL}`,
    siteName: "Algorize",
    title: "Algorize — Creative Digital Agency",
    description:
      "We design and build modern, animated, and high-performance digital experiences.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Algorize Creative Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Algorize — Creative Digital Agency",
    description:
      "Modern web design, animation, and performance-focused development.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <SeoSchema />
        <Header />
        {children}
      </body>
    </html>
  );
}
