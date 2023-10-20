import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Me | Oleksandr Semenchuk"
}

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-20">
      <div className="relative">
        <div className="flex flex-col gap-4 m-auto max-w-sm animate-float-in">
          <h3 className="font-bold text-[2.5rem] leading-[2.75rem] md:text-5xl">
            Hi there!
            <br />
            I'm Oleksandr,
            <br />I build a software.
          </h3>
          <p className="text-base md:text-lg text-primary">
            I'm a fullstack software developer based in Kyiv, passionate about
            crafting digital solutions. I bring creative and functional concepts
            to life. <br /> Let's build something amazing together!
          </p>
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

          <Link href="https://www.linkedin.com/in/oleksandr-semenchuk-58a901240/">
            <Image
              src="/contacts/linkedin.svg"
              width={20}
              height={20}
              alt="linkedin"
            />
          </Link>

          <Link href="https://cv.djinni.co/2b/0b80d95959084a04e25a417ca5a56d/Oleksandr_Semenchuk.pdf">
            <Image src="/contacts/cv.svg" width={20} height={20} alt="cv" />
          </Link>

          <Link href="mailto:o@semenchuk.cc">
            <Image src="/contacts/mail.svg" width={20} height={20} alt="mail" />
          </Link>
        </div>
      </div>
      <div className="flex row-span-2">
        <model-viewer
          src="/development-model.glb"
          shadow-intensity="1"
          camera-orbit="120deg 75deg"
          camera-controls
          disable-zoom
          auto-rotate
          auto-rotate-delay="1500"
          interaction-prompt="none"
        />
      </div>
      <Link
        href="/contact"
        className="bg-beau py-3 px-6 font-medium text-2xl rounded-xl self-center w-fit mx-auto mt-4 animate-float-in-delay-1 opacity-0">
        Get in touch
      </Link>
    </div>
  )
}
