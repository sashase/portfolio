"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Nav() {
  const pathname: string = usePathname()

  return (
    <nav className="md:w-min flex justify-between font-medium text-xl md:text-2xl mx-auto gap-5 md:gap-16 animate-float-in relative">
      <Link
        href="/skills"
        className={`transition-all text-primary py-1 px-5 rounded-full z-10 ${
          pathname === "/skills" && "bg-azurish"
        }`}>
        Skills
      </Link>
      <Link
        onClick={() => console.log("hgello")}
        href="/"
        className={`transition-all text-primary py-1 px-5 rounded-full ${
          pathname === "/" && "bg-azurish"
        }`}>
        Me
      </Link>
      <Link
        href="/projects"
        className={`transition-all text-primary py-1 px-5 rounded-full ${
          pathname === "/projects" && "bg-azurish"
        }`}>
        Projects
      </Link>
    </nav>
  )
}
