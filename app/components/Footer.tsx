import Link from "next/link"

export default function Footer() {
  return (
    <footer className="text-beau flex items-end justify-between w-100 md:w-4/5 mx-0 md:mx-auto mt-5 md:mt-0 animate-float-in-delay-1 opacity-0">
      <Link
        href="https://github.com/sashase/portfolio"
        className="hover:text-secondary transition-all">
        © 2023 Oleksandr Semenchuk
      </Link>
      <div className="flex flex-col gap-1">
        <span className="font-bold text-secondary text-lg self-end">
          Contacts
        </span>
        <div className="flex flex-col md:flex-row gap-1 md:gap-5">
          <Link
            href="https://github.com/sashase"
            className="hover:text-secondary transition-all ">
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/oleksandr-semenchuk-58a901240/"
            className="hover:text-secondary transition-all">
            LinkedIn
          </Link>
          <Link
            href="https://cv.djinni.co/2b/0b80d95959084a04e25a417ca5a56d/Oleksandr_Semenchuk.pdf"
            className="hover:text-secondary transition-all">
            CV
          </Link>
          <Link
            href="mailto:contactme@semenchuk.cc"
            className="hover:text-secondary transition-all">
            E-Mail
          </Link>
        </div>
      </div>
    </footer>
  )
}
