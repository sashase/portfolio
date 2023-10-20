import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Me | Oleksandr Semenchuk"
}

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-12">
      <div className="relative">
        <div className="flex flex-col gap-4 m-auto max-w-sm animate-float-in">
          <h3 className="font-bold text-[2.5rem] leading-[2.75rem] md:text-5xl text-primary">
            Hi there!
            <br />
            I'm Oleksandr,
            <br />I build a software.
          </h3>
          <p className="text-base md:text-lg text-secondary">
            I'm a fullstack software developer based in Kyiv, passionate about
            crafting digital solutions. I bring creative and functional concepts
            to life. <br /> Let's build something amazing together!
          </p>
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
        className="bg-azurish text-primary py-3 px-7 font-medium text-2xl rounded-full self-center w-fit mx-auto mt-10 transition-all animate-float-in-delay-1 opacity-0">
        Get in touch
      </Link>
    </div>
  )
}
