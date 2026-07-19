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
  title: "Riyasat Royalcrest | European Elegance in Navi Mumbai",
  description: "Experience European-style township living at Riyasat Royalcrest in Wavandhal, near Panvel. Offering 15 acres of premium plots with 12+ luxury amenities.",
  keywords: "Riyasat Royalcrest, Navi Mumbai plots, Wavandhal real estate, Panvel township, European theme township, Riyasat Group",
  openGraph: {
    title: "Riyasat Royalcrest | Premium Plots in Navi Mumbai",
    description: "Experience European-style township living at Riyasat Royalcrest in Wavandhal, near Panvel.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
