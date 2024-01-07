import Link from "next/link"

export default function Footer() {
  return (
    <footer className="text-secondary dark:text-secondaryDark flex items-end justify-between mx-0 mt-16 md:mt-32 animate-float-in-delay-1 opacity-0">
      <Link
        href="https://github.com/sashase/portfolio"
        className="hover:text-secondary dark:hover:text-secondaryDark transition-all">
        © 2023 Oleksandr Semenchuk
      </Link>
      <div className="flex flex-col gap-1">
        <span className="font-bold text-secondary dark:text-secondaryDark text-lg self-end">
          Contacts
        </span>
        <div className="flex flex-col md:flex-row gap-1 md:gap-5">
          <Link
            href="https://github.com/sashase"
            className="hover:text-secondary dark:hover:text-secondaryDark transition-all ">
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/oleksandr-semenchuk-58a901240/"
            className="hover:text-secondary dark:hover:text-secondaryDark transition-all">
            LinkedIn
          </Link>
          <Link
            href="/files/cv.pdf"
            className="hover:text-secondary dark:hover:text-secondaryDark transition-all">
            CV
          </Link>
          <Link
            href="mailto:hello@semenchuk.cc"
            className="hover:text-secondary dark:hover:text-secondaryDark transition-all">
            E-Mail
          </Link>
        </div>
      </div>
    </footer>
  )
}
