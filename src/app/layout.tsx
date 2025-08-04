import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/utils/providers";
import MenuBar from "./_components/menu-bar";
import Footer from "./_components/footer";
import { generateMetadata, defaultSEO } from "@/components/seo/metadata";
import { LocalBusinessSchema } from "@/components/seo/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = generateMetadata(defaultSEO);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <LocalBusinessSchema />
        <link rel="canonical" href="https://oreplumbing.com" />
        <meta name="geo.region" content="US-UT" />
        <meta name="geo.placename" content="Cache County" />
        <meta name="geo.position" content="41.7370;-111.8338" />
        <meta name="ICBM" content="41.7370, -111.8338" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <MenuBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
