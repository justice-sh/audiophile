import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import { Header } from "./widgets/header"
import { Footer } from "./widgets/footer"

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

const site = process.env.NEXT_PUBLIC_SITE_URL || ""
// const site_without_protocol = site.replace(/^https?:\/\//, "");

const meta = {
  title: "Audiophile",
  description: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast. 🎧🔊",
}

const images = {
  banner: `/banner.png`,
}

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: meta.title,
  description: meta.description,
  applicationName: meta.title,
  creator: "Justice N.",
  manifest: "/site.webmanifest",
  keywords: ["audiophile", "music", "audio", "headphones", "earphones", "speakers", "next.js", "react", "typescript"],
  openGraph: {
    type: "website",
    url: site,
    title: meta.title,
    description: meta.description,
    siteName: meta.title,
    images: [{ url: images.banner }, { url: "/favicon.ico" }, { url: "/favicon-32x32.png" }, { url: "/favicon-16x16.png" }],
  },
  twitter: { card: "summary_large_image", site: "@site", creator: "@creator", images: images.banner },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
      </head>
      <body className={`${manrope.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
