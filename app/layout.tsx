import type { Metadata } from "next"
import { Gabarito } from "next/font/google"
import "./globals.css"
import Nav from "./components/Nav"
import Footer from "./components/Footer"

const gabarito = Gabarito({ subsets: ["latin"] })

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
      <body
        className={`bg-background min-h-screen w-5/6 md:w-7/12 m-auto py-7 flex flex-col justify-between ${gabarito.className}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
