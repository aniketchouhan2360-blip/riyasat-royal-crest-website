import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://royalcrestriyasat.in"),
  title: "Riyasat Royalcrest | Premium Property in Navi Mumbai | Riyasat Group",
  description: "Looking for property in Navi Mumbai? Explore Riyasat Royalcrest by Riyasat Group. A premium 15-acre European-style township with luxury amenities near Panvel. Secure your plot today.",
  keywords: "property in navi mumbai, premium plots in mumbai, riyasat group project, riyasat royal crest, royalcrest navi mumbai, european theme township panvel, real estate mumbai, luxury plots navi mumbai, buy property near panvel",
  authors: [{ name: "Riyasat Group" }],
  creator: "Riyasat Group",
  publisher: "Riyasat Infra Developers",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Riyasat Royalcrest | Premium Property in Navi Mumbai",
    description: "Looking for property in Navi Mumbai? Explore Riyasat Royalcrest by Riyasat Group. A premium 15-acre European-style township.",
    url: "https://royalcrestriyasat.in",
    siteName: "Riyasat Royalcrest",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riyasat Royalcrest | Property in Navi Mumbai",
    description: "Premium 15-acre European-style township by Riyasat Group.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Riyasat Royalcrest",
  "image": "https://royalcrestriyasat.in/assets/royalcrest/aerial-1.png",
  "@id": "https://royalcrestriyasat.in",
  "url": "https://royalcrestriyasat.in",
  "telephone": "+919999999999", // Replace with actual number later
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Wavandhal",
    "addressLocality": "Navi Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "410220",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.9894,
    "longitude": 73.1175
  },
  "parentOrganization": {
    "@type": "Organization",
    "name": "Riyasat Group",
    "url": "https://riyasatgroup.in"
  },
  "description": "Premium 15-acre European-style township in Navi Mumbai by Riyasat Group."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Placeholders for Google Ads tracking or Google Tag Manager */}
        {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_STRING" /> */}
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
