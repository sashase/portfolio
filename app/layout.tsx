import type { Metadata } from "next"
import { Gabarito } from "next/font/google"
import "./globals.css"
import Nav from "./components/Nav"
import Footer from "./components/Footer"

const gabarito = Gabarito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Me | Oleksandr Semenchuk",
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
        className={`min-h-screen w-4/5 md:w-3/4 m-auto py-6 flex flex-col items-center justify-between ${gabarito.className}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
