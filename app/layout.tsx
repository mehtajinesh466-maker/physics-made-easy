import type React from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { ORGANIZATION_SCHEMA } from "@/config/seo-config"
import { getRootMetadata } from "@/lib/seo"

import "./globals.css"

export const metadata = getRootMetadata()

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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_SCHEMA),
          }}
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
