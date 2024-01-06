import type { Metadata } from "next"
import ContactMe from "./components/ContactMe"

export const metadata: Metadata = {
  title: "Me | Oleksandr Semenchuk"
}

export default function Home() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <div className="flex flex-col gap-4 m-auto animate-float-in">
          <h3 className="font-bold text-[2.5rem] leading-[2.75rem] md:text-5xl text-primary dark:text-primaryDark">
            Hi there!
            <br />
            I'm Oleksandr,
            <br />I build a software.
          </h3>
          <p className="text-base md:text-lg text-secondary dark:text-secondaryDark">
            I'm a software developer based in Schweinfurt. <br /> Passionate
            about crafting digital solutions. I bring creative and functional
            concepts to life. <br /> Let's build something amazing together!
          </p>
        </div>
      </div>
      <div className="flex row-span-2 dark:opacity-75">
        <model-viewer
          src="/development-model.glb"
          shadow-intensity="1"
          camera-orbit="120deg 75deg 90%"
          camera-controls
          disable-zoom
          auto-rotate
          auto-rotate-delay="1500"
          interaction-prompt="none"
          className="hidden lg:block"
        />
        <img
          src="/development.webp"
          alt="development"
          className="block lg:hidden animate-float-in"
        />
      </div>
      <ContactMe />
    </main>
  )
}
