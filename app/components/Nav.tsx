"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Nav() {
  const pathname: string = usePathname()

  return (
    <nav className="md:w-min flex justify-between font-medium text-xl md:text-2xl mx-auto gap-5 md:gap-16 animate-float-in relative">
      <Link
        href="/skills"
        className={`transition-all text-primary dark:text-primaryDark py-1 px-5 rounded-full z-10 ${
          pathname === "/skills" && "bg-surface dark:bg-surfacePrimaryDark"
        }`}>
        Skills
      </Link>
      <Link
        href="/"
        className={`transition-all text-primary dark:text-primaryDark py-1 px-5 rounded-full ${
          pathname === "/" && "bg-surface dark:bg-surfacePrimaryDark"
        }`}>
        Me
      </Link>
      <Link
        href="/projects"
        className={`transition-all text-primary dark:text-primaryDark py-1 px-5 rounded-full ${
          pathname === "/projects" && "bg-surface dark:bg-surfacePrimaryDark"
        }`}>
        Projects
      </Link>
    </nav>
  )
}
