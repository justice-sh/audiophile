import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const site = process.env.NEXT_PUBLIC_SITE_URL || "";
// const site_without_protocol = site.replace(/^https?:\/\//, "");

const meta = {
  title: "Audiophile E-commerce",
  name: "Audiophile",
  description: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast. 🎧🔊",
};

const images = {
  banner: `/banner.png`,
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  applicationName: meta.name,
  creator: "Justice N.",
  keywords: ["audiophile", "music", "audio", "headphones", "earphones", "speakers", "next.js", "react", "typescript"],
  openGraph: {
    type: "website",
    url: site,
    title: meta.title,
    description: meta.description,
    siteName: meta.name,
    images: [{ url: images.banner }],
  },
  twitter: { card: "summary_large_image", site: "@site", creator: "@creator", images: images.banner },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable}  antialiased`}>{children}</body>
    </html>
  );
}
