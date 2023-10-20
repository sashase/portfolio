import type { Metadata } from "next"
import "./globals.css"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Script from "next/script"

export const metadata: Metadata = {
  description: "Oleksandr - Full Stack Developer"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          strategy="afterInteractive"
          type="module"
          src="https://unpkg.com/@google/model-viewer@^2.1.1/dist/model-viewer.min.js"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gabarito:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background min-h-screen w-5/6 md:w-2/3 m-auto py-7 flex flex-col justify-between font-gabarito">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
