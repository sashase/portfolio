"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Nav() {
  const pathname: string = usePathname()

  return (
    <nav className="w-11/12 md:w-min flex justify-between font-medium text-2xl mx-auto gap-16">
      <Link
        href="/skills"
        className={`transition-all ${
          pathname === "/skills" ? "text-primary" : "text-black"
        }`}>
        Skills
      </Link>
      <Link
        href="/"
        className={`transition-all ${
          pathname === "/" ? "text-primary" : "text-black"
        }`}>
        Me
      </Link>
      <Link
        href="/projects"
        className={`transition-all ${
          pathname === "/projects" ? "text-primary" : "text-black"
        }`}>
        Projects
      </Link>
    </nav>
  )
}
