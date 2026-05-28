import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"

import Header from "@/components/header"
import Footer from "@/components/footer"

import "./globals.css"

export const metadata: Metadata = {
  title: "Physics Made Easy Academy",
  description:
    "Professional physics coaching academy for students from beginner to advanced levels with expert faculty and online/offline classes.",
  generator: "v0.app",

  verification: {
    google: "QYUm0yBJfsoy9OOV0OkQguoz_ME6vAHST6CPIVaV9ZU",
  },

  icons: {
    apple: "/apple-touch-icon.png",
    icon: [
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
  },

  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BWB30G2N9V"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BWB30G2N9V');
          `}
        </Script>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Physics Made Easy Academy",
              url: "https://telanganachessschool.com",
              sameAs: ["https://thegeniuschessacademy.com"],
            }),
          }}
        />

        <meta
          name="relatedAcademy"
          content="https://thegeniuschessacademy.com"
        />
      </head>

      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Header />

        <Suspense fallback={null}>
          {children}
        </Suspense>

        <Footer />

        <Analytics />
      </body>
    </html>
  )
}
