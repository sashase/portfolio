import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Me | Oleksandr Semenchuk"
}

export default function Home() {
  return (
    <div className="relative">
      <div className="flex flex-col gap-4 self-start max-w-sm">
        <h3 className="font-bold text-[2.5rem] leading-[2.75rem] md:text-5xl">
          Hi there!
          <br />
          I'm Oleksandr,
          <br />I build software.
        </h3>
        <p className="text-base md:text-lg text-primary">
          I'm a fullstack software developer based in Kyiv, passionate about
          crafting digital solutions. I bring creative and functional concepts
          to life. <br /> Let's build something amazing together!
        </p>
        <Link
          href="/contact"
          className="bg-beau py-3 px-6 font-medium text-2xl rounded-xl self-center">
          Contact me
        </Link>
      </div>
      <div className="hidden md:flex flex-col gap-2 absolute top-5 -start-8">
        <Link href="https://github.com/sashase">
          <Image
            src="/contacts/github.svg"
            width={20}
            height={20}
            alt="github"
          />
        </Link>

        <Link href="https://linkedin.com">
          <Image
            src="/contacts/linkedin.svg"
            width={20}
            height={20}
            alt="linkedin"
          />
        </Link>

        <Link href="https://github.com/sashase">
          <Image src="/contacts/cv.svg" width={20} height={20} alt="cv" />
        </Link>

        <Link href="mailto:o@semenchuk.cc">
          <Image src="/contacts/mail.svg" width={20} height={20} alt="mail" />
        </Link>
      </div>
    </div>
  )
}
