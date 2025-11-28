import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import Script from 'next/script'

import { Analytics } from '@vercel/analytics/next';

import './base.css'
import './main.css'
import './vendor.css'
//import '../../utilities/vanillas/plugins.js'
//import '../../utilities/vanillas/main.js'
//import '../../utilities/vanillas/initMansory.js'

import { getServerSideURL } from '@/utilities/getURL'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html className={cn(GeistSans.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
       {/*  <script src="/js/jquery-3.2.1.min.js" async></script>
        <script src="/js/plugins.js" async></script>
        <script src="/js/main.js" async></script> */}
      </head>
      <body>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />
          {/* <div id="preloader">
             <div id="loader"></div>
          </div> */}
          <Header />
          {children}
          <Footer />
        </Providers>
        <Script src="js/jquery-3.2.1.min.js" strategy="afterInteractive"></Script>
        <Script src="js/plugins.js" strategy="afterInteractive"></Script>
        <Script src="js/main.js" strategy="afterInteractive" ></Script>
        <Analytics />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
