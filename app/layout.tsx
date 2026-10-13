import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://fetiya-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Fetiya Seid — Senior Full Stack Developer",
    template: "%s | Fetiya Seid",
  },

  description:
    "Senior Full Stack Developer based in Addis Ababa, Ethiopia. Building scalable enterprise systems — ERP, HRM, LMS, Logistics, Healthcare, and more with React, Next.js, NestJS, Laravel, and PostgreSQL.",

  keywords: [
    "Fetiya Seid",
    "Full Stack Developer",
    "Software Developer",
    "Next.js Developer",
    "React Developer",
    "NestJS",
    "Laravel",
    "Enterprise Software",
    "ERP Developer",
    "HRM System",
    "Addis Ababa Developer",
    "Ethiopia Software Engineer",
  ],

  authors: [{ name: "Fetiya Seid", url: siteUrl }],
  creator: "Fetiya Seid",
  publisher: "Fetiya Seid",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Fetiya Seid — Portfolio",
    title: "Fetiya Seid — Senior Full Stack Developer",
    description:
      "Building scalable enterprise systems across ERP, HRM, LMS, Logistics, and Healthcare.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fetiya Seid — Senior Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fetiya Seid — Senior Full Stack Developer",
    description:
      "Building scalable enterprise systems across ERP, HRM, LMS, Logistics, and Healthcare.",
    images: ["/og-image.png"],
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
  icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  apple: "/apple-icon.png",
},
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}